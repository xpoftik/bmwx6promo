const baseUrl = "https://jsonplaceholder.typicode.com"
const apiMethod = "/posts"

const sendData = (data, success, fail) => {
    var request = new XMLHttpRequest();
    request.open("POST", baseUrl + apiMethod);

    request.addEventListener('readystatechange', () => {
        if(request.readyState !== 4) return;
        if(request.status === 200 || request.status === 201) {
            const response = JSON.parse(request.responseText);
            success(response.id);
        } else {
            fail(request.status)
            console.log("An exception occurred during request: '", request.status, "'");
            throw new Error(request.status);
        }
    })
    
    request.send(JSON.stringify(data))    
}

function isEmpty(str) {
    return (!str || str.length === 0 );
}

function isBlank(str) {
    return (!str || /^\s*$/.test(str));
}

const showMessage = (form, message, timeout) => {
    const small = document.createElement('small')
    small.textContent = message;
    small.style.color = 'green';

    if(!timeout || timeout < 0) {
        throw new Error("Timeout can't be less 0.");
    }

    form.append(small);
    setTimeout(() => {
        small.remove();
    }, timeout);
}

const showErrorMessage = (form, message, timeout) => {
    const small = document.createElement('small')
    small.textContent = message;
    small.style.color = 'red';

    if(!timeout || timeout < 0) {
        throw new Error("Timeout can't be less 0.");
    }

    form.append(small);
    setTimeout(() => {
        small.remove();
        enableSubmit();
    }, timeout);
}

const allFieldsFilled = (form) => {
    var hasEmptyFields = false;
    for(const {name, value} of form.elements) {
        if(name) {
            if(isEmpty(value) || isBlank(value)) {
                hasEmptyFields = true;
            }
        }
    }
    return !hasEmptyFields;
}

const submitButtons = document.querySelectorAll('.form__button')
const modalButtons = document.querySelectorAll('.modal__button')

const preventSubmit = () => {
    submitButtons.forEach((btn) => btn.setAttribute('disabled', ''));
    modalButtons.forEach((btn) => btn.setAttribute('disabled', ''));
}

const enableSubmit = () => {
    submitButtons.forEach((btn) => btn.removeAttribute('disabled', ''));
    modalButtons.forEach((btn) => btn.removeAttribute('disabled', ''));
}

const submitAction = (form, event, callback) => {
    event.preventDefault();

    preventSubmit(form);

    if (!allFieldsFilled(form)) {
        showErrorMessage(form, "All fields must be filled.", 2000);

        return;
    }

    const data = {}
    for(const {name, value} of form.elements) {
        if(name) {
            data[name] = value;
        }
    }

    sendData(data,
    (id) => {
        callback(form, id)
    },
    (status) => {
        alert('An error occurred during request.\nPlease try again later.');
    });
};

const forms = document.querySelectorAll(".form")

const successSubmit = (form, id) => {
    const message = 'Request: ' +  id
                    + '!\nYour request comfirmed, we will call you back soon.';
    const timeout = 5000;

    showMessage(form, message, timeout);

    setTimeout(() => {
        form.reset();
        enableSubmit();
    }, timeout);
}

const submitHandler = (form) => {
    form.addEventListener('submit', (event) => submitAction(form, event, successSubmit));
};

forms.forEach(submitHandler)
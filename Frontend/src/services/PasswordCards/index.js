
let urlService ='http://localhost:5000';

export async function getAll() {

    try{
        const response = await fetch(`${urlService}/password-cards`);
        return await response.json();
    }catch(error) {
        return [];
    }
    
}

export async function save(card) {

    try{
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(card)
        };
        const response = await fetch(`${urlService}/password-cards`,requestOptions);
        return await response.json();
    }catch(error) {
        return false;
    }
    
}

export async function update(id,card) {

    try{
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(card)
        };
        const response = await fetch(`${urlService}/password-cards/${id}`,requestOptions);
        return await response.json();
    }catch(error) {
        return false;
    }
    
}
export async function remove(id) {

    try{
        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        };
        const response = await fetch(`${urlService}/password-cards/${id}`,requestOptions);
        return await response.json();
    }catch(error) {
        return false;
    }
    
}
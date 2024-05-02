const baseUrl = 'http://localhost:8080';

// Função para buscar todos os clientes
export const fetchClientes = async () => {
    try {
        const response = await fetch(`${baseUrl}/clientes`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('Failed to fetch clients:', error);
    }
};

// Função para buscar um cliente pelo ID
export const fetchClienteById = async (id) => {
    try {
        const response = await fetch(`${baseUrl}/clientes/${id}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error(`Failed to fetch client ${id}:`, error);
    }
};

// Função para criar um novo cliente com suporte a FormData
export const createCliente = async (formData) => {
    try {
        const response = await fetch(`${baseUrl}/clientes`, {
            method: 'POST',
            body: formData
        });
        if (!response.ok) {
            throw new Error('Failed to post new client');
        }
        return await response.json();
    } catch (error) {
        console.error('Error posting new client:', error);
    }
};


// Função para atualizar um cliente
export const updateCliente = async (id, cliente) => {
    try {
        const response = await fetch(`${baseUrl}/clientes/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(cliente)
        });
        if (!response.ok) {
            throw new Error('Failed to update client');
        }
        return await response.json();
    } catch (error) {
        console.error(`Error updating client ${id}:`, error);
    }
};

// Função para deletar um cliente
export const deleteCliente = async (id) => {
    try {
        const response = await fetch(`${baseUrl}/clientes/${id}`, {
            method: 'DELETE'
        });
        if (!response.ok) {
            throw new Error('Failed to delete client');
        }
        return 'Client deleted successfully';
    } catch (error) {
        console.error(`Error deleting client ${id}:`, error);
    }
};

const API_URL = 'http://localhost:3000/api';

export const createLead = async (leadData) => {
  try {
    const response = await fetch(`${API_URL}/leads`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(leadData)
    });

    if (!response.ok) {
      throw new Error('Erro ao enviar formulário');
    }

    return await response.json();
  } catch (error) {
    console.error('Erro:', error);
    throw error;
  }
};

export const getCourses = async () => {
  try {
    const response = await fetch(`${API_URL}/courses`);
    return await response.json();
  } catch (error) {
    console.error('Erro:', error);
    throw error;
  }
};
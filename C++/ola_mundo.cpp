#include <iostream>
using namespace std;

// Função para somar dois números
int soma(int a, int b) {
    return a + b;
}

int main() {
    // Imprimindo uma mensagem
    cout << "Olá, Mundo!" << endl;

    // Chamando a função soma
    int resultado = soma(3, 5);
    cout << "A soma é: " << resultado << endl;

    return 0;
}

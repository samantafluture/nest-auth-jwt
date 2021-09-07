import { SetMetadata } from '@nestjs/common';

export const Role = (role: string) => SetMetadata('role', role);

// decorator -> alterar comportamento de variável, função, método ou classe
// ou trabalhar com metadados

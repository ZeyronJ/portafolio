# Etapa 1: Build (Construcción de la aplicación)
FROM node:22-alpine AS builder

WORKDIR /app

# Copiar archivos de definición de dependencias
COPY package.json package-lock.json* ./

# Instalar dependencias limpias para el build
RUN npm ci

# Copiar el código fuente
COPY . .

# Construir la aplicación
RUN npm run build

# Etapa 2: Runner (Servidor web liviano de producción)
FROM nginx:alpine AS runner

# Copiar la configuración personalizada de Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copiar los archivos compilados del build stage
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

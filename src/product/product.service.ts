import { Injectable } from '@nestjs/common';
import { ProductDTO } from 'src/dto/product.dto';

@Injectable()
export class ProductService {
    findAll(): ProductDTO[]{
        return [
            { name: 'Mango', id: 1, price: 250 },
            { name: 'Apple', id: 2, price: 150 },
            { name: 'PineApple', id: 3, price: 50 }
        ]
    }
}

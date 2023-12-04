import { Controller, Get } from '@nestjs/common';
import { ProductDTO } from 'src/dto/product.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
    constructor(private productService: ProductService){

    }
    
    @Get()
    getProductAll(): ProductDTO[] {
        return this.productService.findAll();
    }
}

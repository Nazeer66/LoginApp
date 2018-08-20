import { HttpInterceptor } from '@angular/common/http';
import { Injectable , Injector} from '@angular/core';
import { UserServiceService } from './user-service.service';


@Injectable()
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private _injector: Injector) { }

  intercept(req, next){
    let authService = this._injector.get(UserServiceService)
    let tokenizedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${authService.getToken()}`
      }
    })
    return next.handle(tokenizedReq)
  }
}

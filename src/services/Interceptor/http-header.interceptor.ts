import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpHeaderInterceptor implements HttpInterceptor {
  intercept(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    req: HttpRequest<any>,
    next: HttpHandler,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ): Observable<HttpEvent<any>> {
    const modifiedReq = req.clone({
      setHeaders: {
        'Content-Type': 'application/json',
        // 'Authorization': `Bearer your-auth-token`,
        // 'Custom-Header': 'CustomHeaderValue'
      },
    });

    // ส่งคำขอที่ถูกแก้ไขไปยังเซิร์ฟเวอร์
    return next.handle(modifiedReq);
  }
}

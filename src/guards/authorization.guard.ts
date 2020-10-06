import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';

@Injectable()
export class AuthorizationGuard implements CanActivate {
  constructor() {}
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const user = request.user;

    const authorizationId = request.authorizationId;

    if (!user) {
      throw new UnauthorizedException();
    }

    if (user._id.toString() !== authorizationId.toString()) {
      throw new UnauthorizedException();
    }

    return true;
  }
}

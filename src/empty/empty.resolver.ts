import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { EmptyResolverBase } from "./base/empty.resolver.base";
import { Empty } from "./base/Empty";
import { EmptyService } from "./empty.service";

@graphql.Resolver(() => Empty)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class EmptyResolver extends EmptyResolverBase {
  constructor(
    protected readonly service: EmptyService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

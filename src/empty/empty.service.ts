import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { EmptyServiceBase } from "./base/empty.service.base";

@Injectable()
export class EmptyService extends EmptyServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

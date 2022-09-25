/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EmptyWhereInput } from "./EmptyWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class EmptyListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => EmptyWhereInput,
  })
  @ValidateNested()
  @Type(() => EmptyWhereInput)
  @IsOptional()
  @Field(() => EmptyWhereInput, {
    nullable: true,
  })
  every?: EmptyWhereInput;

  @ApiProperty({
    required: false,
    type: () => EmptyWhereInput,
  })
  @ValidateNested()
  @Type(() => EmptyWhereInput)
  @IsOptional()
  @Field(() => EmptyWhereInput, {
    nullable: true,
  })
  some?: EmptyWhereInput;

  @ApiProperty({
    required: false,
    type: () => EmptyWhereInput,
  })
  @ValidateNested()
  @Type(() => EmptyWhereInput)
  @IsOptional()
  @Field(() => EmptyWhereInput, {
    nullable: true,
  })
  none?: EmptyWhereInput;
}
export { EmptyListRelationFilter };

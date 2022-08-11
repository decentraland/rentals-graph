// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Rental extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Rental entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Rental must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Rental", id.toString(), this);
    }
  }

  static load(id: string): Rental | null {
    return changetype<Rental | null>(store.get("Rental", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get contractAddress(): string {
    let value = this.get("contractAddress");
    return value!.toString();
  }

  set contractAddress(value: string) {
    this.set("contractAddress", Value.fromString(value));
  }

  get tokenId(): BigInt {
    let value = this.get("tokenId");
    return value!.toBigInt();
  }

  set tokenId(value: BigInt) {
    this.set("tokenId", Value.fromBigInt(value));
  }

  get lessor(): string {
    let value = this.get("lessor");
    return value!.toString();
  }

  set lessor(value: string) {
    this.set("lessor", Value.fromString(value));
  }

  get tenant(): string {
    let value = this.get("tenant");
    return value!.toString();
  }

  set tenant(value: string) {
    this.set("tenant", Value.fromString(value));
  }

  get operator(): string {
    let value = this.get("operator");
    return value!.toString();
  }

  set operator(value: string) {
    this.set("operator", Value.fromString(value));
  }

  get rentalDays(): BigInt {
    let value = this.get("rentalDays");
    return value!.toBigInt();
  }

  set rentalDays(value: BigInt) {
    this.set("rentalDays", Value.fromBigInt(value));
  }

  get startedAt(): BigInt {
    let value = this.get("startedAt");
    return value!.toBigInt();
  }

  set startedAt(value: BigInt) {
    this.set("startedAt", Value.fromBigInt(value));
  }

  get endsAt(): BigInt {
    let value = this.get("endsAt");
    return value!.toBigInt();
  }

  set endsAt(value: BigInt) {
    this.set("endsAt", Value.fromBigInt(value));
  }

  get updatedAt(): BigInt {
    let value = this.get("updatedAt");
    return value!.toBigInt();
  }

  set updatedAt(value: BigInt) {
    this.set("updatedAt", Value.fromBigInt(value));
  }

  get pricePerDay(): BigInt {
    let value = this.get("pricePerDay");
    return value!.toBigInt();
  }

  set pricePerDay(value: BigInt) {
    this.set("pricePerDay", Value.fromBigInt(value));
  }

  get sender(): string {
    let value = this.get("sender");
    return value!.toString();
  }

  set sender(value: string) {
    this.set("sender", Value.fromString(value));
  }

  get ownerHasClaimedAsset(): boolean {
    let value = this.get("ownerHasClaimedAsset");
    return value!.toBoolean();
  }

  set ownerHasClaimedAsset(value: boolean) {
    this.set("ownerHasClaimedAsset", Value.fromBoolean(value));
  }

  get isExtension(): boolean {
    let value = this.get("isExtension");
    return value!.toBoolean();
  }

  set isExtension(value: boolean) {
    this.set("isExtension", Value.fromBoolean(value));
  }

  get isActive(): boolean {
    let value = this.get("isActive");
    return value!.toBoolean();
  }

  set isActive(value: boolean) {
    this.set("isActive", Value.fromBoolean(value));
  }

  get signature(): string {
    let value = this.get("signature");
    return value!.toString();
  }

  set signature(value: string) {
    this.set("signature", Value.fromString(value));
  }

  get rentalContractAddress(): string {
    let value = this.get("rentalContractAddress");
    return value!.toString();
  }

  set rentalContractAddress(value: string) {
    this.set("rentalContractAddress", Value.fromString(value));
  }
}

export class Count extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Count entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Count must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Count", id.toString(), this);
    }
  }

  static load(id: string): Count | null {
    return changetype<Count | null>(store.get("Count", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get value(): BigInt {
    let value = this.get("value");
    return value!.toBigInt();
  }

  set value(value: BigInt) {
    this.set("value", Value.fromBigInt(value));
  }
}

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

  static loadInBlock(id: string): Rental | null {
    return changetype<Rental | null>(store.get_in_block("Rental", id));
  }

  static load(id: string): Rental | null {
    return changetype<Rental | null>(store.get("Rental", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get contractAddress(): string {
    let value = this.get("contractAddress");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set contractAddress(value: string) {
    this.set("contractAddress", Value.fromString(value));
  }

  get tokenId(): BigInt {
    let value = this.get("tokenId");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set tokenId(value: BigInt) {
    this.set("tokenId", Value.fromBigInt(value));
  }

  get lessor(): string {
    let value = this.get("lessor");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set lessor(value: string) {
    this.set("lessor", Value.fromString(value));
  }

  get tenant(): string {
    let value = this.get("tenant");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set tenant(value: string) {
    this.set("tenant", Value.fromString(value));
  }

  get operator(): string {
    let value = this.get("operator");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set operator(value: string) {
    this.set("operator", Value.fromString(value));
  }

  get rentalDays(): BigInt {
    let value = this.get("rentalDays");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set rentalDays(value: BigInt) {
    this.set("rentalDays", Value.fromBigInt(value));
  }

  get startedAt(): BigInt {
    let value = this.get("startedAt");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set startedAt(value: BigInt) {
    this.set("startedAt", Value.fromBigInt(value));
  }

  get endsAt(): BigInt {
    let value = this.get("endsAt");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set endsAt(value: BigInt) {
    this.set("endsAt", Value.fromBigInt(value));
  }

  get updatedAt(): BigInt {
    let value = this.get("updatedAt");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set updatedAt(value: BigInt) {
    this.set("updatedAt", Value.fromBigInt(value));
  }

  get pricePerDay(): BigInt {
    let value = this.get("pricePerDay");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set pricePerDay(value: BigInt) {
    this.set("pricePerDay", Value.fromBigInt(value));
  }

  get sender(): string {
    let value = this.get("sender");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set sender(value: string) {
    this.set("sender", Value.fromString(value));
  }

  get ownerHasClaimedAsset(): boolean {
    let value = this.get("ownerHasClaimedAsset");
    if (!value || value.kind == ValueKind.NULL) {
      return false;
    } else {
      return value.toBoolean();
    }
  }

  set ownerHasClaimedAsset(value: boolean) {
    this.set("ownerHasClaimedAsset", Value.fromBoolean(value));
  }

  get claimedAt(): BigInt | null {
    let value = this.get("claimedAt");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set claimedAt(value: BigInt | null) {
    if (!value) {
      this.unset("claimedAt");
    } else {
      this.set("claimedAt", Value.fromBigInt(<BigInt>value));
    }
  }

  get isExtension(): boolean {
    let value = this.get("isExtension");
    if (!value || value.kind == ValueKind.NULL) {
      return false;
    } else {
      return value.toBoolean();
    }
  }

  set isExtension(value: boolean) {
    this.set("isExtension", Value.fromBoolean(value));
  }

  get isActive(): boolean {
    let value = this.get("isActive");
    if (!value || value.kind == ValueKind.NULL) {
      return false;
    } else {
      return value.toBoolean();
    }
  }

  set isActive(value: boolean) {
    this.set("isActive", Value.fromBoolean(value));
  }

  get signature(): string {
    let value = this.get("signature");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set signature(value: string) {
    this.set("signature", Value.fromString(value));
  }

  get rentalContractAddress(): string {
    let value = this.get("rentalContractAddress");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
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

  static loadInBlock(id: string): Count | null {
    return changetype<Count | null>(store.get_in_block("Count", id));
  }

  static load(id: string): Count | null {
    return changetype<Count | null>(store.get("Count", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get value(): BigInt {
    let value = this.get("value");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set value(value: BigInt) {
    this.set("value", Value.fromBigInt(value));
  }
}

export class IndexesUpdateHistory extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save IndexesUpdateHistory entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type IndexesUpdateHistory must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("IndexesUpdateHistory", id.toString(), this);
    }
  }

  static loadInBlock(id: string): IndexesUpdateHistory | null {
    return changetype<IndexesUpdateHistory | null>(
      store.get_in_block("IndexesUpdateHistory", id)
    );
  }

  static load(id: string): IndexesUpdateHistory | null {
    return changetype<IndexesUpdateHistory | null>(
      store.get("IndexesUpdateHistory", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get type(): string {
    let value = this.get("type");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set type(value: string) {
    this.set("type", Value.fromString(value));
  }

  get date(): BigInt {
    let value = this.get("date");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set date(value: BigInt) {
    this.set("date", Value.fromBigInt(value));
  }

  get sender(): string {
    let value = this.get("sender");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set sender(value: string) {
    this.set("sender", Value.fromString(value));
  }

  get contractUpdate(): string | null {
    let value = this.get("contractUpdate");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set contractUpdate(value: string | null) {
    if (!value) {
      this.unset("contractUpdate");
    } else {
      this.set("contractUpdate", Value.fromString(<string>value));
    }
  }

  get singerUpdate(): string | null {
    let value = this.get("singerUpdate");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set singerUpdate(value: string | null) {
    if (!value) {
      this.unset("singerUpdate");
    } else {
      this.set("singerUpdate", Value.fromString(<string>value));
    }
  }

  get assetUpdate(): string | null {
    let value = this.get("assetUpdate");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set assetUpdate(value: string | null) {
    if (!value) {
      this.unset("assetUpdate");
    } else {
      this.set("assetUpdate", Value.fromString(<string>value));
    }
  }
}

export class IndexesUpdateContractHistory extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id != null,
      "Cannot save IndexesUpdateContractHistory entity without an ID"
    );
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type IndexesUpdateContractHistory must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("IndexesUpdateContractHistory", id.toString(), this);
    }
  }

  static loadInBlock(id: string): IndexesUpdateContractHistory | null {
    return changetype<IndexesUpdateContractHistory | null>(
      store.get_in_block("IndexesUpdateContractHistory", id)
    );
  }

  static load(id: string): IndexesUpdateContractHistory | null {
    return changetype<IndexesUpdateContractHistory | null>(
      store.get("IndexesUpdateContractHistory", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get newIndex(): BigInt {
    let value = this.get("newIndex");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set newIndex(value: BigInt) {
    this.set("newIndex", Value.fromBigInt(value));
  }

  get contractAddress(): Bytes {
    let value = this.get("contractAddress");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set contractAddress(value: Bytes) {
    this.set("contractAddress", Value.fromBytes(value));
  }
}

export class IndexesUpdateSignerHistory extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id != null,
      "Cannot save IndexesUpdateSignerHistory entity without an ID"
    );
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type IndexesUpdateSignerHistory must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("IndexesUpdateSignerHistory", id.toString(), this);
    }
  }

  static loadInBlock(id: string): IndexesUpdateSignerHistory | null {
    return changetype<IndexesUpdateSignerHistory | null>(
      store.get_in_block("IndexesUpdateSignerHistory", id)
    );
  }

  static load(id: string): IndexesUpdateSignerHistory | null {
    return changetype<IndexesUpdateSignerHistory | null>(
      store.get("IndexesUpdateSignerHistory", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get newIndex(): BigInt {
    let value = this.get("newIndex");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set newIndex(value: BigInt) {
    this.set("newIndex", Value.fromBigInt(value));
  }

  get signer(): string {
    let value = this.get("signer");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set signer(value: string) {
    this.set("signer", Value.fromString(value));
  }
}

export class IndexesUpdateAssetHistory extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id != null,
      "Cannot save IndexesUpdateAssetHistory entity without an ID"
    );
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type IndexesUpdateAssetHistory must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("IndexesUpdateAssetHistory", id.toString(), this);
    }
  }

  static loadInBlock(id: string): IndexesUpdateAssetHistory | null {
    return changetype<IndexesUpdateAssetHistory | null>(
      store.get_in_block("IndexesUpdateAssetHistory", id)
    );
  }

  static load(id: string): IndexesUpdateAssetHistory | null {
    return changetype<IndexesUpdateAssetHistory | null>(
      store.get("IndexesUpdateAssetHistory", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get newIndex(): BigInt {
    let value = this.get("newIndex");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set newIndex(value: BigInt) {
    this.set("newIndex", Value.fromBigInt(value));
  }

  get signer(): string {
    let value = this.get("signer");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set signer(value: string) {
    this.set("signer", Value.fromString(value));
  }

  get tokenId(): BigInt {
    let value = this.get("tokenId");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set tokenId(value: BigInt) {
    this.set("tokenId", Value.fromBigInt(value));
  }

  get contractAddress(): string {
    let value = this.get("contractAddress");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set contractAddress(value: string) {
    this.set("contractAddress", Value.fromString(value));
  }

  get type(): string {
    let value = this.get("type");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set type(value: string) {
    this.set("type", Value.fromString(value));
  }
}

export class Rentable extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Rentable entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Rentable must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Rentable", id.toString(), this);
    }
  }

  static loadInBlock(id: string): Rentable | null {
    return changetype<Rentable | null>(store.get_in_block("Rentable", id));
  }

  static load(id: string): Rentable | null {
    return changetype<Rentable | null>(store.get("Rentable", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }
}

export class RentalAsset extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save RentalAsset entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type RentalAsset must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("RentalAsset", id.toString(), this);
    }
  }

  static loadInBlock(id: string): RentalAsset | null {
    return changetype<RentalAsset | null>(
      store.get_in_block("RentalAsset", id)
    );
  }

  static load(id: string): RentalAsset | null {
    return changetype<RentalAsset | null>(store.get("RentalAsset", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get contractAddress(): Bytes {
    let value = this.get("contractAddress");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set contractAddress(value: Bytes) {
    this.set("contractAddress", Value.fromBytes(value));
  }

  get tokenId(): BigInt {
    let value = this.get("tokenId");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set tokenId(value: BigInt) {
    this.set("tokenId", Value.fromBigInt(value));
  }

  get lessor(): Bytes | null {
    let value = this.get("lessor");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set lessor(value: Bytes | null) {
    if (!value) {
      this.unset("lessor");
    } else {
      this.set("lessor", Value.fromBytes(<Bytes>value));
    }
  }

  get isClaimed(): boolean {
    let value = this.get("isClaimed");
    if (!value || value.kind == ValueKind.NULL) {
      return false;
    } else {
      return value.toBoolean();
    }
  }

  set isClaimed(value: boolean) {
    this.set("isClaimed", Value.fromBoolean(value));
  }

  get claimedAt(): BigInt | null {
    let value = this.get("claimedAt");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set claimedAt(value: BigInt | null) {
    if (!value) {
      this.unset("claimedAt");
    } else {
      this.set("claimedAt", Value.fromBigInt(<BigInt>value));
    }
  }
}

export class RentalsContract extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save RentalsContract entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type RentalsContract must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("RentalsContract", id.toString(), this);
    }
  }

  static loadInBlock(id: string): RentalsContract | null {
    return changetype<RentalsContract | null>(
      store.get_in_block("RentalsContract", id)
    );
  }

  static load(id: string): RentalsContract | null {
    return changetype<RentalsContract | null>(store.get("RentalsContract", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get fee(): BigInt {
    let value = this.get("fee");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set fee(value: BigInt) {
    this.set("fee", Value.fromBigInt(value));
  }
}

export class AnalyticsTotalData extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save AnalyticsTotalData entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type AnalyticsTotalData must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("AnalyticsTotalData", id.toString(), this);
    }
  }

  static loadInBlock(id: string): AnalyticsTotalData | null {
    return changetype<AnalyticsTotalData | null>(
      store.get_in_block("AnalyticsTotalData", id)
    );
  }

  static load(id: string): AnalyticsTotalData | null {
    return changetype<AnalyticsTotalData | null>(
      store.get("AnalyticsTotalData", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get rentals(): i32 {
    let value = this.get("rentals");
    if (!value || value.kind == ValueKind.NULL) {
      return 0;
    } else {
      return value.toI32();
    }
  }

  set rentals(value: i32) {
    this.set("rentals", Value.fromI32(value));
  }

  get volume(): BigInt {
    let value = this.get("volume");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set volume(value: BigInt) {
    this.set("volume", Value.fromBigInt(value));
  }

  get lessorEarnings(): BigInt {
    let value = this.get("lessorEarnings");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set lessorEarnings(value: BigInt) {
    this.set("lessorEarnings", Value.fromBigInt(value));
  }

  get feeCollectorEarnings(): BigInt {
    let value = this.get("feeCollectorEarnings");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set feeCollectorEarnings(value: BigInt) {
    this.set("feeCollectorEarnings", Value.fromBigInt(value));
  }
}

export class AnalyticsDayData extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save AnalyticsDayData entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type AnalyticsDayData must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("AnalyticsDayData", id.toString(), this);
    }
  }

  static loadInBlock(id: string): AnalyticsDayData | null {
    return changetype<AnalyticsDayData | null>(
      store.get_in_block("AnalyticsDayData", id)
    );
  }

  static load(id: string): AnalyticsDayData | null {
    return changetype<AnalyticsDayData | null>(
      store.get("AnalyticsDayData", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get date(): i32 {
    let value = this.get("date");
    if (!value || value.kind == ValueKind.NULL) {
      return 0;
    } else {
      return value.toI32();
    }
  }

  set date(value: i32) {
    this.set("date", Value.fromI32(value));
  }

  get rentals(): i32 {
    let value = this.get("rentals");
    if (!value || value.kind == ValueKind.NULL) {
      return 0;
    } else {
      return value.toI32();
    }
  }

  set rentals(value: i32) {
    this.set("rentals", Value.fromI32(value));
  }

  get volume(): BigInt {
    let value = this.get("volume");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set volume(value: BigInt) {
    this.set("volume", Value.fromBigInt(value));
  }

  get lessorEarnings(): BigInt {
    let value = this.get("lessorEarnings");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set lessorEarnings(value: BigInt) {
    this.set("lessorEarnings", Value.fromBigInt(value));
  }

  get feeCollectorEarnings(): BigInt {
    let value = this.get("feeCollectorEarnings");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set feeCollectorEarnings(value: BigInt) {
    this.set("feeCollectorEarnings", Value.fromBigInt(value));
  }
}

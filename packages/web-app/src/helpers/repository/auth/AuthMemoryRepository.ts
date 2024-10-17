import { LoginResponse } from "@shared/contract/auth";
import { AuthRepository } from "./AuthRepository";

export class AuthMemoryRepository implements AuthRepository {
  private readonly timeout: number = 2e3;
  private readonly percentageSuccessRating: number = 1;

  public async register(): Promise<void> {
    await this.delay();

    const isSuccessfulRequest = Math.random() < this.percentageSuccessRating;

    if (!isSuccessfulRequest) throw new Error("This username is already used");
  }

  public async login(): Promise<LoginResponse> {
    await this.delay();

    const isSuccessfulRequest = Math.random() < this.percentageSuccessRating;

    if (!isSuccessfulRequest) throw new Error("Bad credentials");
    return {
      id: 1,
      email: "notch@minecraft.net",
      username: "Notch",
      token: "Never dig down!",
    };
  }

  public async update(): Promise<void> {
    await this.delay();

    const isSuccessfulRequest = Math.random() < this.percentageSuccessRating;

    if (!isSuccessfulRequest) throw new Error("Error with our server !");
    return;
  }

  private delay(): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(resolve, this.timeout);
    });
  }
}

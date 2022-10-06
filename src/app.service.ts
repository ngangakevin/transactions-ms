import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  getTransaction(transId: string): Transaction {
    const testTransaction: Transaction = {
      beneficiary: 'Nganga',
      channel: 'mpesa',
      fundsSource: 'testAccountId',
      transactionTime: Date.now().toLocaleString(),
      transId
    }
    return testTransaction;
  }
}

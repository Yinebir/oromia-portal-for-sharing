
export enum DisputeStatus {
  NEW = 'New',
  IN_PROGRESS = 'In Progress',
  RESOLVED = 'Resolved',
  REJECTED = 'Rejected',
}

export enum DisputeType {
  CARD = 'Card',
  MOBILE = 'Mobile Banking',
  OTHER = 'Other',
}

export enum CardDisputeSubType {
  ON_US = 'On Us Dispute',
  REMOTE_ON_US = 'Remote On Us Dispute',
  POS = 'POS Dispute', // Added POS Dispute
}

export enum MobileDisputeSubType {
  P2P_INCOMING = 'P2P Incoming',
  P2P_OUTGOING = 'P2P Outgoing',
  TELEBIRR_INCOMING = 'Tele Birr Incoming',
  TELEBIRR_OUTGOING = 'Tele Birr Outgoing',
  MPESA_INCOMING = 'MPesa Incoming',
  MPESA_OUTGOING = 'MPesa Outgoing',
  AIRTIME_TOPUP = 'Airtime Top Up',
  AIRLINES = 'Airlines',
  BILL_PAYMENT = 'Bill Payment',
  OTHER = 'Other Mobile Dispute',
}

export interface TransactionDetails {
  amount?: number;
  date?: string; // YYYY-MM-DD
  referenceNumber?: string;
}

export interface Dispute {
  id: string;
  customerName: string;
  customerAccountNumber: string;
  customerCardNumber: string;
  atmLocation: string;
  transactionDetails?: TransactionDetails;
  disputeDetail: string;
  disputeType: DisputeType | '';
  cardDisputeSubType?: CardDisputeSubType | '';
  mobileDisputeSubType?: MobileDisputeSubType | '';
  otherMobileDisputeType?: string; // For when MobileDisputeSubType.OTHER is selected
  status: DisputeStatus;
  submittedDate: string; // ISO date string
  branchSubmitter: string; // Made non-optional, should be captured at submission
  hoHandler?: string;
  hoNotes?: string;
  resolutionDetails?: string;
  completionDate?: string; 
}

export interface DisputeFormData {
  customerName: string;
  customerAccountNumber: string;
  customerCardNumber: string;
  atmLocation: string;
  transactionAmount: string;
  transactionDate: string;
  transactionReferenceNumber: string;
  disputeDetail: string;
  disputeType: DisputeType | '';
  cardDisputeSubType: CardDisputeSubType | '';
  mobileDisputeSubType: MobileDisputeSubType | '';
  otherMobileDisputeType: string;
  branchSubmitter: string; 
  hoHandler?: string; 
  hoNotes?: string;
  resolutionDetails?: string;
  status?: DisputeStatus; 
}

export enum AppView {
  SUBMIT_DISPUTE = 'SUBMIT_DISPUTE',
  VIEW_DISPUTES = 'VIEW_DISPUTES',
}

export interface EditDisputeModalProps {
  isOpen: boolean;
  dispute: Dispute | null;
  onSave: (updatedDispute: Dispute) => void;
  onClose: () => void;
}

export interface PasswordPromptModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUnlock: (password: string) => boolean; // Returns true if password is correct
  error?: string | null;
}

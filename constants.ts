
import React from 'react';
import { DisputeStatus, DisputeType, CardDisputeSubType, MobileDisputeSubType } from './types';

export const ADMIN_PASSWORD = 'admin123'; // CHANGE THIS IN A REAL SCENARIO!

export const INITIAL_FORM_DATA = {
  customerName: '',
  customerAccountNumber: '',
  customerCardNumber: '',
  atmLocation: '',
  transactionAmount: '',
  transactionDate: '',
  transactionReferenceNumber: '',
  disputeDetail: '',
  disputeType: '' as DisputeType | '',
  cardDisputeSubType: '' as CardDisputeSubType | '',
  mobileDisputeSubType: '' as MobileDisputeSubType | '',
  otherMobileDisputeType: '',
  branchSubmitter: '',
  hoHandler: '',
  hoNotes: '',
  resolutionDetails: '',
  status: DisputeStatus.NEW,
};

export const STATUS_COLORS: Record<DisputeStatus, string> = {
  [DisputeStatus.NEW]: 'bg-blue-100 text-blue-800',
  [DisputeStatus.IN_PROGRESS]: 'bg-yellow-100 text-yellow-800',
  [DisputeStatus.RESOLVED]: 'bg-green-100 text-green-800',
  [DisputeStatus.REJECTED]: 'bg-red-100 text-red-800',
};

export const STATUS_OPTIONS = (Object.keys(DisputeStatus) as Array<keyof typeof DisputeStatus>).map(key => ({
  value: DisputeStatus[key],
  label: DisputeStatus[key],
}));


export const DISPUTE_TYPE_OPTIONS = [
  { value: DisputeType.CARD, label: 'Card Related' },
  { value: DisputeType.MOBILE, label: 'Mobile Banking Related' },
  { value: DisputeType.OTHER, label: 'Other' },
];

export const CARD_DISPUTE_SUB_TYPE_OPTIONS = [
  { value: CardDisputeSubType.ON_US, label: 'On Us Dispute' },
  { value: CardDisputeSubType.REMOTE_ON_US, label: 'Remote On Us Dispute' },
  { value: CardDisputeSubType.POS, label: 'POS Dispute' },
];

export const MOBILE_DISPUTE_SUB_TYPE_OPTIONS = [
  { value: MobileDisputeSubType.P2P_INCOMING, label: 'P2P Incoming' },
  { value: MobileDisputeSubType.P2P_OUTGOING, label: 'P2P Outgoing' },
  { value: MobileDisputeSubType.TELEBIRR_INCOMING, label: 'Tele Birr Incoming' },
  { value: MobileDisputeSubType.TELEBIRR_OUTGOING, label: 'Tele Birr Outgoing' },
  { value: MobileDisputeSubType.MPESA_INCOMING, label: 'MPesa Incoming' },
  { value: MobileDisputeSubType.MPESA_OUTGOING, label: 'MPesa Outgoing' },
  { value: MobileDisputeSubType.AIRTIME_TOPUP, label: 'Airtime Top Up' },
  { value: MobileDisputeSubType.AIRLINES, label: 'Airlines' },
  { value: MobileDisputeSubType.BILL_PAYMENT, label: 'Bill Payment' },
  { value: MobileDisputeSubType.OTHER, label: 'Other Mobile Dispute' },
];


// Basic SVG Icons
export const PlusIcon: React.FC = () => (
  React.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      strokeWidth: 1.5,
      stroke: "currentColor",
      className: "w-5 h-5",
    },
    React.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M12 4.5v15m7.5-7.5h-15",
    })
  )
);

export const ListIcon: React.FC = () => (
  React.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      strokeWidth: 1.5,
      stroke: "currentColor",
      className: "w-5 h-5",
    },
    React.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5",
    })
  )
);

export const BankIcon: React.FC = () => (
 React.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      strokeWidth: 1.5,
      stroke: "currentColor",
      className: "w-8 h-8 text-emerald-600",
    },
    React.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M12 21V3m0 0H9m3 0h3m-3 0V3m0 0L6 6.33M12 3l6 3.33M6 6.33V19.5A1.5 1.5 0 0 0 7.5 21h9a1.5 1.5 0 0 0 1.5-1.5V6.33M6 6.33L12 9.67l6-3.34M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
    })
  )
);

export const EditIcon: React.FC = () => (
  React.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      strokeWidth: 1.5,
      stroke: "currentColor",
      className: "w-4 h-4 inline mr-1",
    },
    React.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10",
    })
  )
);

export const SaveIcon: React.FC = () => (
  React.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      strokeWidth: 1.5,
      stroke: "currentColor",
      className: "w-4 h-4 inline mr-1",
    },
    React.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M4.5 12.75l6 6 9-13.5",
    })
  )
);

export const CancelIcon: React.FC = () => (
  React.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      strokeWidth: 1.5,
      stroke: "currentColor",
      className: "w-4 h-4 inline mr-1",
    },
    React.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M6 18L18 6M6 6l12 12",
    })
  )
);

export const XMarkIcon: React.FC<{className?: string}> = ({ className = "w-6 h-6" }) => (
  React.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      strokeWidth: 1.5,
      stroke: "currentColor",
      className: className,
    },
    React.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M6 18 18 6M6 6l12 12",
    })
  )
);

export const LockClosedIcon: React.FC<{className?: string}> = ({ className = "w-5 h-5" }) => (
  React.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      strokeWidth: 1.5,
      stroke: "currentColor",
      className: className,
    },
    React.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z",
    })
  )
);

export const LockOpenIcon: React.FC<{className?: string}> = ({ className = "w-5 h-5" }) => (
  React.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      strokeWidth: 1.5,
      stroke: "currentColor",
      className: className,
    },
    React.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M13.5 10.5V6.75a4.5 4.5 0 1 1 9 0v3.75M3.75 10.5V6.75a4.5 4.5 0 1 1 9 0v3.75m0-1.5V12m0 6H21m-1.5-6H5.25a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25H18a2.25 2.25 0 0 0 2.25-2.25V18M1.5 18h15M12 6.75v15m0-15H5.25m6.75 0H18.75",
    })
  )
);

const BASE_URL = import.meta.env.VITE_API_URL;

//--------------- 메인 ---------------//

// POST - 간편 로그인: LoginReqDto -> LoginResDto
export const LoginURL = () => `${BASE_URL}/login`;

//--------------- 여행 ---------------//

// POST - 여행 생성: TripReqDto -> 201 Created
export const TripsPostURL = () => `${BASE_URL}/trips`;

// GET - 여행 상세 정보 읽기: () -> TripResDto
export const TripsGetURL = (tripIdx: number) => `${BASE_URL}/trips/${tripIdx}`;

//--------------- 회비 ---------------//

export const DuesGetRuleURL = (teamIdx: number) =>
  `${BASE_URL}/dues/rule/${teamIdx}`;

// /dues?paid=false&date=2024-05&accIdx=1&teamIdx=1
export const DuesGetStatusUrl = (
  year: number,
  month: number,
  status: boolean,
  accIdx: number,
  teamIdx: number
) =>
  `${BASE_URL}/dues?paid=${status}&date=${year}-${month.toString().padStart(2, "0")}&accIdx=${accIdx}&teamIdx=${teamIdx}`;

export const DuesSetRuleURL = () => `${BASE_URL}/dues/rule`;

export const DuesGetTotalAmtURL = (accIdx: number, memberIdx: number) =>
  `${BASE_URL}/dues/details/${accIdx}/total-amount?memberIdx=${memberIdx}`;

//--------------- 모임원 ---------------//

// POST - 모임원 전체 출력: TeamMembersReqDto -> TeamMembersResDto
export const TeamMembersPostURL = () => `${BASE_URL}/team`;

// POST - 모임 초대하기 (초대링크 생성): InviteTeamReqDto -> String
export const GenerateInviteLinkPostURL = () => `${BASE_URL}/team/invite-team`;

// PUT - 총무 변경: ChangeOwnerReqDto -> 200 OK
export const ChangeOwnerPutURL = () => `${BASE_URL}/team/change-owner`;

// PUT - 모임원 전체 수락 (수락대기-> 모임원으로 상태 변경): AcceptTeamMembersReqDto -> 200 OK
export const AcceptTeamMembersPutURL = () => `${BASE_URL}/team/accept-all`;

// PUT - 모임원 거절 (수락대기-> 모임원 삭제): AcceptTeamMemberReqDto -> 200 OK
export const RejectTeamMemberPutURL = () => `${BASE_URL}/team/reject-one`;

// PUT - 모임원 수락 (수락대기-> 모임원으로 상태 변경): AcceptTeamMemberReqDto -> 200 OK
export const AcceptTeamMemberPutURL = () => `${BASE_URL}/team/accept-one`;

// PUT - 모임원 전체 내보내기 (모임원-> 모임원 삭제): RejectTeamMembersReqDto -> 200 OK
export const ExportTeamMembersPutURL = () => `${BASE_URL}/team/export-members`;

// PUT - 모임원 내보내기 (모임원-> 모임원 삭제): AcceptTeamMemberReqDto -> 200 OK
export const ExportTeamMemberPutURL = () => `${BASE_URL}/team/export-member`;

// PUT - 모임서비스 나가기 (전체 내보내기 후 모임 삭제): ExportTeamReqDto -> 200 OK
export const ExportTeamPutURL = () => `${BASE_URL}/team/export-team`;

//------------------- 내 모임 --------------------------

// POST - 내 모임 서비스 조회
export const MyMoimGetURL = () => `${BASE_URL}/account`;

//--------------- 모임서비스 가입 ---------------//

// POST - 전체 계좌 조회 (계좌 선택 기능): AccountsReqDto -> AccountsResDto
export const AccountListPostURL = () => `${BASE_URL}/accounts`;

// POST - 모임서비스 가입: AddTeamReqDto -> 200 OK
export const AddTeamPostURL = () => `${BASE_URL}/account/add`;

//--------------- 모임관리 ---------------//

// POST - 모임관리 페이지: ManageTeamReqDto -> ManageTeamResDto
export const ManageTeamPostURL = () => `${BASE_URL}/account/set`;
// PUT - 알림설정 (on/off): ToggleAlarmReqDto -> 200 ok
export const ToggleAlarmPutURL = () => `${BASE_URL}/account/alarm`;

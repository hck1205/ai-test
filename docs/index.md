# AI Development Workflow (Proposal)

## 1. Problem

AI 기반 개발에서는 다음과 같은 문제가 발생할 수 있습니다.

### Fast Prototype but Hard to Scale

초기 Demo나 Mockup은 빠르게 만들 수 있지만 Feature가 늘어날수록 구조가 무너지기 쉽습니다.

### Prompt Ping-Pong

기능 수정 → 다시 수정 → 다시 수정이 반복되면서 코드 일관성이 깨집니다.

### Regression

새 기능을 수정할 때 기존 기능이 깨지는 문제가 발생할 수 있습니다.

### Context Loss

AI는 전체 프로젝트 구조를 항상 이해하지 못하고 파일 단위로 작업하는 경우가 많습니다.

---

## 2. Root Cause

문제의 주요 원인은 다음과 같습니다.

- Spec 없이 코드 생성
- Architecture 계획 부족
- Validation 및 Testing 부족

---

## 3. Proposed Workflow

AI 기반 개발에서는 다음 Workflow를 사용하는 것이 안정적입니다.

SPEC  
↓  
PLAN  
↓  
GENERATE  
↓  
TEST  
↓  
VERIFY

---

## 4. Key Principles

### Spec First

코드를 작성하기 전에 반드시 기능 Spec을 먼저 정의합니다.

### Small Scope Generation

AI에게 큰 기능을 한 번에 요청하지 않고 파일 단위로 구현합니다.

### Validation

코드 생성 후 Spec과 맞는지 검증합니다.

### Regression Protection

테스트를 통해 기존 기능이 깨지지 않도록 합니다.

---

## 5. Guardrails

AI에게 다음 규칙을 명시하는 것이 중요합니다.

- Do not modify unrelated files
- Do not remove existing behavior
- Do not refactor unrelated code

---

## Conclusion

AI 기반 프론트엔드 개발을 안정적으로 진행하기 위해서는 다음이 필요합니다.

- Spec 기반 개발
- 단계적 코드 생성
- 테스트 기반 검증
- 명확한 AI 규칙 정의

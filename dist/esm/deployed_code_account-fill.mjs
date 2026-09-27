export const name="deployed_code_account-fill";
export const id="dl_ed7830ddb96b6b1b9f65";
export const url=new URL("../icons/deployed_code_account-fill.svg?v=88c6d330575003222497458196402bdc55528abc4f9dd947bb36960fd96c1ab9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

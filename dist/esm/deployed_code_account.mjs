export const name="deployed_code_account";
export const id="dl_1cba9316ede37e3ec0ab";
export const url=new URL("../icons/deployed_code_account.svg?v=016c7f3f1d1c677aa8b2ce1739996e1a1fcdb97a0a339d7e11f12955ee6c352d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

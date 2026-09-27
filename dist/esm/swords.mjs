export const name="swords";
export const id="dl_356a80582e8bf761fa37";
export const url=new URL("../icons/swords.svg?v=b226fcdcd281ca083f09de2409597d12d812c5a317829c0515ad752d94640a2f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

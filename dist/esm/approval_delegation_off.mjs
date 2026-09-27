export const name="approval_delegation_off";
export const id="dl_54a93f6950a50b417897";
export const url=new URL("../icons/approval_delegation_off.svg?v=270fb0c8204bd99deec3dc0463c809b33de4e1d904f6cfed0ecf9830f851e25b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

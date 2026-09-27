export const name="square-terminal";
export const id="dl_c41b627bbe03414580a0";
export const url=new URL("../icons/square-terminal.svg?v=09d802fef75d0579f071bab24707f43a222a4b041eeebed5e7e8495b1e739aeb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

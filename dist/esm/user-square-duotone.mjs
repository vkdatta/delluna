export const name="user-square-duotone";
export const id="dl_1de980d0ef3a48a6b6d8";
export const url=new URL("../icons/U/user-square-duotone.svg?v=99d8b962b47a2c4d8bd014a452fc43c8f27dd71a3e4c5dcdf1ec94a533ec67c8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

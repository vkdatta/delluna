export const name="file-lock-bold";
export const id="dl_a31f05fe638f4b238d9b";
export const url=new URL("../icons/file-lock-bold.svg?v=bea95c57fee88c6c5fc4f28802420b8919966c94a0fab6dc6b92eaad3e0cbc26",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="stamp-light";
export const id="dl_b836450a692ab55e6be7";
export const url=new URL("../icons/stamp-light.svg?v=1ac4e080f5c8d7ebba611f91f1008f42570251872b8e908336ae7a4a72542478",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

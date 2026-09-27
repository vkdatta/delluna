export const name="self_improvement";
export const id="dl_7182e01666b32474b500";
export const url=new URL("../icons/self_improvement.svg?v=d885fe99c2dd6ce4c90e0e5128a17c8e933416b0000a1a40c82be0949e6a551f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

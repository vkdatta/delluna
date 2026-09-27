export const name="skip-back-circle";
export const id="dl_6be5da237d426468254a";
export const url=new URL("../icons/skip-back-circle.svg?v=d73834066b99e32629289290aedbc692540900bb4877ecbd0af6f0ba8f877efe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="fire-duotone";
export const id="dl_898ecd37c9274e0b8c4a";
export const url=new URL("../icons/fire-duotone.svg?v=370d4d1d164e53cae0fc034cdf2fae4f2c5b83c42def3785af59cd868b7582d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

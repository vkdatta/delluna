export const name="arrows-out-line-horizontal-thin";
export const id="dl_0bfd9a2a5d6148a09ccd";
export const url=new URL("../icons/arrows-out-line-horizontal-thin.svg?v=18f9f430554348a3d11aeaf2b7b2b0ebbd6c2d2c2b38105ef891efc578189f2f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="tipi-thin";
export const id="dl_bfa750d2d4854e4ca5f2";
export const url=new URL("../icons/T/tipi-thin.svg?v=6dc38511dc1d32268957becb105b1435a81d044b01943356ea00bdb5b999f5dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

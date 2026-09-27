export const name="keep_public-fill";
export const id="dl_e6af88a25b16414c1b11";
export const url=new URL("../icons/keep_public-fill.svg?v=2c3657d2f4c8f7e0153e28b101cf82a8bba1a192d4a04114f47edaea95ae2dbb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

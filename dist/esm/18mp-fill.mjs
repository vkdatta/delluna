export const name="18mp-fill";
export const id="dl_950c344f280f6ed03d7c";
export const url=new URL("../icons/18mp-fill.svg?v=64a2a1f179af2d04cea22afc7e277c19e569964893ee75c0a0caea26eccbef54",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

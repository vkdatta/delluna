export const name="codepen-logo-bold";
export const id="dl_5a90f9eb0c0a4d0b9559";
export const url=new URL("../icons/codepen-logo-bold.svg?v=cac5e52cbc505617a1d1a8a179eee5e3ed9914ab7fddf86decc5a418a862139a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

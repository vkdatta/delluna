export const name="cookie_off-fill";
export const id="dl_492485f23b4e4bfc7c8e";
export const url=new URL("../icons/cookie_off-fill.svg?v=b2762f14b6ee88c4bc88c79e07f63270056af6275684ccff30e799d4d352cf50",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="mobile_cast";
export const id="dl_dc6d20b06c5eaeb4098b";
export const url=new URL("../icons/mobile_cast.svg?v=c40bfc23c0f12fd9abcde999f9fc14a920a9808fb844cef907c1941b13153436",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

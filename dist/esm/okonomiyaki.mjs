export const name="okonomiyaki";
export const id="dl_bd798e690f764461a4e5";
export const url=new URL("../icons/okonomiyaki.svg?v=f2fa17591896706db849799c9b8d7795d419a69e5d6edb986da16196cdeeb8c1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

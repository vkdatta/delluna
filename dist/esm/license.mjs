export const name="license";
export const id="dl_f78a1db587a044246703";
export const url=new URL("../icons/license.svg?v=864e5fe75bd6dd2bf29c69415638221a5a8180d440708f2a2d748bfe78585b74",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

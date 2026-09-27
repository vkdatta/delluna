export const name="twitter-logo-fill";
export const id="dl_15c966b138fd7f166e31";
export const url=new URL("../icons/twitter-logo-fill.svg?v=327f2258d12d01b3548c10dc9a1f288db40acb641cc7b8e17962f1f1b57217b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

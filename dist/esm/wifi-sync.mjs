export const name="wifi-sync";
export const id="dl_09270cc7e55a47658a45";
export const url=new URL("../icons/wifi-sync.svg?v=f41fa665d151387a03c218a2521a23ea3579f8f04675358b456c9b7e4f71eecc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

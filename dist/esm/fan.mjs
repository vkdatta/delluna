export const name="fan";
export const id="dl_969ffb56e12e4d61b97a";
export const url=new URL("../icons/fan.svg?v=21c69c625c627d2363d213bdb9d2f714b1175658a14647f212ff6f3b1b10c8c2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

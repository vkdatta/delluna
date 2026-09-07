export const name="skype-logo-fill";
export const id="dl_42004d43c3a144a3a01a";
export const url=new URL("../icons/S/skype-logo-fill.svg?v=bd264055d7317fb0cfe3a39ae17028d2a5447dc3a204a999c5e5fbebed423e28",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="ladder";
export const id="dl_7f7747b376bf4c9fa20b";
export const url=new URL("../icons/ladder.svg?v=3e2213292a3d1cf69d4025c93d4cfc5a68d2ee426dbafb549c6c0b938aa028ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="watch_check";
export const id="dl_c37d8ab4caa7fa16ce4a";
export const url=new URL("../icons/watch_check.svg?v=56703b027b9a13945aa2867fe6d7b71432e1665bd620080464cefee81ebefab5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

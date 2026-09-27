export const name="local_police";
export const id="dl_f11f0dbe6215395c66fa";
export const url=new URL("../icons/local_police.svg?v=4ea2c0ef418954e147e667a231ea9086ec1829dfd10923e1cc3b6cdf114d0f03",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

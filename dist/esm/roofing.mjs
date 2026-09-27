export const name="roofing";
export const id="dl_cbd56fd3ca75e29de361";
export const url=new URL("../icons/roofing.svg?v=4ba9b6355d02b247b4f2c6cb3b6351f30d7330cac8edd911dda3792ad22b3f3c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

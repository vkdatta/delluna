export const name="perspective-light";
export const id="dl_7a478f10893e43c3a81f";
export const url=new URL("../icons/perspective-light.svg?v=5e5ea770822001dacbbbbcd48897a37961cbee54528777e7f7953b9557c161f2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

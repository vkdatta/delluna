export const name="lucid_3-shredder";
export const id="dl_7ebcdd2524f841488101";
export const url=new URL("../icons/lucid_3-shredder.svg?v=aafc77cf201ffead3f131b243b50ac43075b685f3d38934b4e2c0170c70891e9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

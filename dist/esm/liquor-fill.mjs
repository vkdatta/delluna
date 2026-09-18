export const name="liquor-fill";
export const id="dl_6883ae97962d498ca11f";
export const url=new URL("../icons/L/liquor-fill.svg?v=cf354ebf5def9c5e1d10767b8802192a3e44aef162970c386f2713effbbfade2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

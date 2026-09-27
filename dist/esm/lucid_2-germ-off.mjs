export const name="lucid_2-germ-off";
export const id="dl_e182afe6b140406fa1fa";
export const url=new URL("../icons/lucid_2-germ-off.svg?v=c7298464faff60002b2cde74188ff0a807de703ddb6629ec1973036abce9346d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

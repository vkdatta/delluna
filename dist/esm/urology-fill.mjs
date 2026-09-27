export const name="urology-fill";
export const id="dl_dd131b91c578484e1e64";
export const url=new URL("../icons/urology-fill.svg?v=9c56a430929ffd558abb4be17e01ec62ceaf8f4d344329afe84a2d674dee7119",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="10k";
export const id="dl_d5f4e237327447d6a63f";
export const url=new URL("../icons/1/10k.svg?v=62bffb8cff6f11e7b847cf6f96b8573bdfe473378ab7d9934ce69ac819e40b47",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

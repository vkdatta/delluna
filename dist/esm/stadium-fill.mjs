export const name="stadium-fill";
export const id="dl_cd9c5aa8476945741b8a";
export const url=new URL("../icons/stadium-fill.svg?v=d132c355bf4e1a47fe55b1f309f78d1b32a3f067c2ee932f43e22959260b1804",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

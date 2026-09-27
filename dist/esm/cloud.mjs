export const name="cloud";
export const id="dl_e9d1dfb9648a4461904c";
export const url=new URL("../icons/cloud.svg?v=a10bd85037f98587c9d46c4032dbe5d4f49c0295f0f36ab42c521676c9650144",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

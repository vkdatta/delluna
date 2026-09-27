export const name="assistant_on_hub-fill";
export const id="dl_4c7d021e6476471c3b67";
export const url=new URL("../icons/assistant_on_hub-fill.svg?v=8715132f3b375408b9e299fe98b50b76d061ed06b044bb096f7f7ae62d61a807",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="rainy";
export const id="dl_0c8fd1c8d3f7e04d8bb0";
export const url=new URL("../icons/rainy.svg?v=24f66c7911ba3b0c0d875d044e09409d0c79203345673e0b7c0c0c20e3393eac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

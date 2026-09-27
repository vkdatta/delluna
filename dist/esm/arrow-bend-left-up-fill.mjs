export const name="arrow-bend-left-up-fill";
export const id="dl_14c6a4eaaaf24d6ca411";
export const url=new URL("../icons/arrow-bend-left-up-fill.svg?v=7d4a73b50f726f6f6a56f2deda1361921f1163acf90dd4aed13ee7eb988739ca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

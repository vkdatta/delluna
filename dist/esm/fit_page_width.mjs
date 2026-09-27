export const name="fit_page_width";
export const id="dl_9265b959991167707786";
export const url=new URL("../icons/fit_page_width.svg?v=d3a73ab993686f7036664970a05aad99f744efc66f8b74eca4dc1246985adc22",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="crosshair-simple-light";
export const id="dl_e95cc02a513246419423";
export const url=new URL("../icons/crosshair-simple-light.svg?v=1303a5ef76ef17aa9462c93831d5bf5c4e3039827da4d4d57ccde38c725a9cde",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

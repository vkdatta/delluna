export const name="picture_in_picture_off-fill";
export const id="dl_25d2d3da17b341177c09";
export const url=new URL("../icons/picture_in_picture_off-fill.svg?v=6469bfeb463cc0ed8355ea24f03e643ccd218875d0d5e863331577e3e8c1b756",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="shutter_speed-fill";
export const id="dl_de274d38dba94d02877e";
export const url=new URL("../icons/shutter_speed-fill.svg?v=0c441f9f193c6b44d968f9be4042b80456886c294a515722443f877ac816c869",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

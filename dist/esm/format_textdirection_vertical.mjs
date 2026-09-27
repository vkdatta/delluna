export const name="format_textdirection_vertical";
export const id="dl_cbaae28f084cabca0973";
export const url=new URL("../icons/format_textdirection_vertical.svg?v=4d9255ac77aae1a97472bbf21a8dc61f2f90bc103341478fc9a104e01ccd47d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

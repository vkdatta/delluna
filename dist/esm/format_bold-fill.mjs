export const name="format_bold-fill";
export const id="dl_03b22330922c01503d5c";
export const url=new URL("../icons/format_bold-fill.svg?v=340b01f6f2f83776f2fc8e65e6255b6bf16432ab97140de9570d84015561ae4e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

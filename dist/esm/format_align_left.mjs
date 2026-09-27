export const name="format_align_left";
export const id="dl_5bb5102c37736044a634";
export const url=new URL("../icons/format_align_left.svg?v=05820d9e7afbb87ea18b6fbf8b5e4357bc38cfa734aca007c10dce1836c0a3f8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="format_align_center-fill";
export const id="dl_b68d5ed73e5d52589d91";
export const url=new URL("../icons/format_align_center-fill.svg?v=c5acb1fc2fbb543cf561eed0b935356bf6bf38104e391cebc1458bbac1cd091b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

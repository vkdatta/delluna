export const name="menu_open-fill";
export const id="dl_1df46fcb5014a0a0ad47";
export const url=new URL("../icons/menu_open-fill.svg?v=744a999954c8086657713c68a196d3f59a267dfc9ddddadf0c01063186d2bdc6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

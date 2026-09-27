export const name="filter_2-fill";
export const id="dl_734cd9724b10efe05897";
export const url=new URL("../icons/filter_2-fill.svg?v=6fc7fd0b80185f1e35070eead9e03fd9f8e63b6130fa037049b5c41b4289f9e7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

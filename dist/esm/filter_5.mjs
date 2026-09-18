export const name="filter_5";
export const id="dl_8559ebcdb2b84b3da35b";
export const url=new URL("../icons/filter_5.svg?v=88e7d600d5d3314fad8e8b3e79ff5b141163ee04a50db743367f575e7de08b62",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

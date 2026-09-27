export const name="arrow-circle-up-fill";
export const id="dl_45abab00081646289830";
export const url=new URL("../icons/arrow-circle-up-fill.svg?v=620f110523aac87db4a4f572dcfd4a9af407c6aa0440e853594fe0654a5ae8b0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

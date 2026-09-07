export const name="suitcase-thin";
export const id="dl_1b7263bed8e44d9283fc";
export const url=new URL("../icons/S/suitcase-thin.svg?v=764cb83db3bb24a3882b75b77e95e389ab5e7d851283d2ff6fdc4f1361fc75ea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

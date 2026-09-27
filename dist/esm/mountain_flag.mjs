export const name="mountain_flag";
export const id="dl_b63f979c5d84f723b758";
export const url=new URL("../icons/mountain_flag.svg?v=26b5f3a819a50913a80571314c28f3223f4773a2656f4cada528330ad35e1a6e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

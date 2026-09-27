export const name="text-columns";
export const id="dl_5faa63ec54fb0427b098";
export const url=new URL("../icons/text-columns.svg?v=ff2970ea5de3f1af40e0fa1f30f94b5aa678832417c32b87e00629988c8c2f23",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

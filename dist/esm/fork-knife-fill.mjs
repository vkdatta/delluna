export const name="fork-knife-fill";
export const id="dl_78e1b7a60d74405fbef9";
export const url=new URL("../icons/fork-knife-fill.svg?v=f6bacbd9575e8fe6f6ca1dbd0b3345dc7ee879fe0dccddcd52423fbab3312f97",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

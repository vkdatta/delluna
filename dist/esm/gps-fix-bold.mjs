export const name="gps-fix-bold";
export const id="dl_21c0291c0f6d4981acce";
export const url=new URL("../icons/gps-fix-bold.svg?v=a623a62a1cdc335ed3a9924d79f3cffc7780fbc36dfad7d51ba7bba5c6df4d44",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

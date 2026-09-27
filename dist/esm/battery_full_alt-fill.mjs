export const name="battery_full_alt-fill";
export const id="dl_6a4edbd2f5fd587acced";
export const url=new URL("../icons/battery_full_alt-fill.svg?v=bfa61af0de863f3f09e0f6272134000c6ac87c554013ca1ada5e606ee90e0753",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

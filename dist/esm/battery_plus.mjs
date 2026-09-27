export const name="battery_plus";
export const id="dl_018d91e0331364ef4f65";
export const url=new URL("../icons/battery_plus.svg?v=99fe17a50690bdab0ba75822d65793ab9d4d6472e9ec07342f121dcd8368bafe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

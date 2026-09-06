export const name="sun-dim";
export const id="dl_21fabc86e67d41bab2ff";
export const url=new URL("../icons/sun-dim.svg?v=c8ff740fb4b80f5fac2b1d74a9aa1faaf4e28c2959ebe505f660e0c176096e74",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

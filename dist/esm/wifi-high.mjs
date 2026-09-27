export const name="wifi-high";
export const id="dl_bad10f95ce0649c7a3ee";
export const url=new URL("../icons/wifi-high.svg?v=a58087a2fce8dea6b36debb7462d15b22d21765561731dcc085f7631e31b00b7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

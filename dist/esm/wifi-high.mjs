export const name="wifi-high";
export const id="dl_bad10f95ce0649c7a3ee";
export const url=new URL("../icons/wifi-high.svg?v=a2959138574441918ee97a7c78b56cfe5f3b4be58c7a463de7852748416367fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

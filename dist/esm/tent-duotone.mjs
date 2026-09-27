export const name="tent-duotone";
export const id="dl_da2325e8daf9a38ccba6";
export const url=new URL("../icons/tent-duotone.svg?v=1197f77bc2a0d3ef5b25e0b8d0f1fda097b30add506afd604667d28ea63814f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

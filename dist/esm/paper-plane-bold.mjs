export const name="paper-plane-bold";
export const id="dl_f2fc7b1a72d044cea43b";
export const url=new URL("../icons/paper-plane-bold.svg?v=aeda82d4ae05612983d976e979f15ca6cf7ccf18b68564ffadae8132c4da4b76",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

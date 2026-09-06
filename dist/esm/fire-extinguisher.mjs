export const name="fire-extinguisher";
export const id="dl_b29b168bd9a1403aa8fc";
export const url=new URL("../icons/fire-extinguisher.svg?v=2bae25824907497378fe8a804843e8b57f513d96eec4436da73c9cc817d95770",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

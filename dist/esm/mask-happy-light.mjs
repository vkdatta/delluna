export const name="mask-happy-light";
export const id="dl_56047b8bdf3c497d8249";
export const url=new URL("../icons/mask-happy-light.svg?v=860ade8baf9a1720043853445721b3373532aac5ef4048cc2393fa7ae83768b7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="computer-tower-fill";
export const id="dl_7bf5815e2e954d32af1b";
export const url=new URL("../icons/computer-tower-fill.svg?v=266ac255b1c5aa206bb0f9141ab1da8ff2da7d20426e3da8dc0bc1485587c81f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

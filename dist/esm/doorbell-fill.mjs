export const name="doorbell-fill";
export const id="dl_57412eed00a5262994e6";
export const url=new URL("../icons/doorbell-fill.svg?v=5a98a727ff1ede7c21a87fb387409710554277deb4ceb4abc4ecca83774a0ed6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="16mp";
export const id="dl_2ad189b70fd57611aea6";
export const url=new URL("../icons/16mp.svg?v=134e32d310d8ac145a10cfe7757ef7eba5cf6e636cb058a491543f25b9332f9e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

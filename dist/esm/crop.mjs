export const name="crop";
export const id="dl_a26c8003383d4045b7cb";
export const url=new URL("../icons/crop.svg?v=244493bf85c6586c4eec52f0b731deb01fe3c28f85da458a8906b40031105708",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

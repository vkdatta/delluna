export const name="number-eight";
export const id="dl_db0bc9dc8839459f8bf1";
export const url=new URL("../icons/number-eight.svg?v=286775ae7dc892e67c3674da6304b46bb0313031c2f807f8f0454fd0536cba06",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

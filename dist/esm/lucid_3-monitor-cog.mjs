export const name="lucid_3-monitor-cog";
export const id="dl_b1bd943b15d04bc1b212";
export const url=new URL("../icons/lucid_3-monitor-cog.svg?v=b23eac660b428218c48fe97b8fe63303590769d4a02983481cfdda7430c483a7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

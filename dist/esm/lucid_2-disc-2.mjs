export const name="lucid_2-disc-2";
export const id="dl_2aaa1dec29b242409094";
export const url=new URL("../icons/lucid_2-disc-2.svg?v=561fd6b83da68f7f350cdc9c97ef8cd20cc9230bbcd5837723316ab5b3c7162a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

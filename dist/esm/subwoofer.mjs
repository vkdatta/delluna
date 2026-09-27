export const name="subwoofer";
export const id="dl_dace240ba1a125ad3601";
export const url=new URL("../icons/subwoofer.svg?v=3b5323a9d3a7a38e7d9bcb300fdbd039b56767892b150af71c4a8446e13be653",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

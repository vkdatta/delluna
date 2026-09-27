export const name="lucid_2-glass-water";
export const id="dl_f4b4ebe939d74985b05e";
export const url=new URL("../icons/lucid_2-glass-water.svg?v=baacd53d96efb818eb387e8ea8d16fda967db08b8a0ce37020a1a5453d64d8d5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="lucid_1-candy-off";
export const id="dl_fddcab5393b5434598c0";
export const url=new URL("../icons/lucid_1-candy-off.svg?v=78c796f5aff0defbdc120ee9bc4078b5622df94fb6dadb6ff8f793008b79b14e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

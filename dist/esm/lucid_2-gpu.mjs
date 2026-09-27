export const name="lucid_2-gpu";
export const id="dl_fb95bcfa515848318491";
export const url=new URL("../icons/lucid_2-gpu.svg?v=5d201231759cdd613dce9fc79319e2c6b00ace99684b9ce960d1d06402595051",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

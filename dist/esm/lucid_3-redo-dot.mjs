export const name="lucid_3-redo-dot";
export const id="dl_4cc2875ba07241ed9fa8";
export const url=new URL("../icons/lucid_3-redo-dot.svg?v=a96a9ffb9a1a22c07bacb308c160aed8450a0dee4cabf7b05927603ee7389c44",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

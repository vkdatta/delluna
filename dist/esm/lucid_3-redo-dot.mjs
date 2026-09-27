export const name="lucid_3-redo-dot";
export const id="dl_4cc2875ba07241ed9fa8";
export const url=new URL("../icons/lucid_3-redo-dot.svg?v=9e1be722cd32e583de8c2e9f22d1ba09a7e6d6026d0aaf8f5c33694ee12b1eae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

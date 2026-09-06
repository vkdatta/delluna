export const name="lucid_3-redo-dot";
export const id="dl_4cc2875ba07241ed9fa8";
export const url=new URL("../icons/lucid_3-redo-dot.svg?v=8bf14760751faa0b1b7ce525131d2941e5f2dadfe28e55dc3ff50a19f6d6108b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="lucid_1-banknote-x";
export const id="dl_be0e4f0492ad4ed9b6f4";
export const url=new URL("../icons/lucid_1-banknote-x.svg?v=8ed9fc4755300f39829543579141fc83b447e7155cdaff08dc038ce9a0f33e0c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

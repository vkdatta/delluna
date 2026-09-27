export const name="unfold_down_alt";
export const id="dl_6e05e0583389be07f237";
export const url=new URL("../icons/unfold_down_alt.svg?v=be6546c325559582c1b70ec8fbe2c2f5e602904316a292b84559d1a1a73cc55e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="lucid_2-germ-off";
export const id="dl_e182afe6b140406fa1fa";
export const url=new URL("../icons/lucid_2-germ-off.svg?v=f4f7d4576b8fc117c95806d43e8b2c40c7c8026b8274d0e65f8780e0f16cd5e3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

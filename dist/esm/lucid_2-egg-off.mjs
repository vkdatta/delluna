export const name="lucid_2-egg-off";
export const id="dl_44423ba8db1e44c388ba";
export const url=new URL("../icons/lucid_2-egg-off.svg?v=16ed5e251285f9c85bde7f505a43c3a862ebca86426209bbb4e5100dae3fd963",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

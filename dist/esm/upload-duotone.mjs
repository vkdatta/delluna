export const name="upload-duotone";
export const id="dl_df7952ce608f38e7fd50";
export const url=new URL("../icons/upload-duotone.svg?v=841a9e742a252585632b67052c4a14bc254c9361d6878eff600b1e45caf7d28c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

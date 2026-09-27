export const name="tablet_android";
export const id="dl_f80966b263eb4f3a9570";
export const url=new URL("../icons/tablet_android.svg?v=07955f4ab85813c5c62c043a316116040d455e33a532f30b9c04fbffe0a17fb2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

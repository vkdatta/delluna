export const name="lucid_1-battery-low";
export const id="dl_c35d01c2b995442282c3";
export const url=new URL("../icons/lucid_1-battery-low.svg?v=fecd42e27738a75828627943ae4b071a39a1b88f2d6fd4ae12708a76c874326c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

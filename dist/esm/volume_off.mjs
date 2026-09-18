export const name="volume_off";
export const id="dl_62c47861d06248fdbba5";
export const url=new URL("../icons/volume_off.svg?v=d02aae6f577b4f74151519c900584183bf31394da3dd38e4f02106348fa152a5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

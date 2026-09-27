export const name="meteor";
export const id="dl_3414c942e1ba4042a6e0";
export const url=new URL("../icons/meteor.svg?v=3e86e8d03de8c2f30a75438fb9bc377d62af481fd0037c861811813833d2a26c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

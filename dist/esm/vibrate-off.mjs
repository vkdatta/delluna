export const name="vibrate-off";
export const id="dl_c0d57ba9a81348959cde";
export const url=new URL("../icons/vibrate-off.svg?v=5b087259eb8bb77d9c58607487254542c5bfae283f1d9241fa6cb71c591e8782",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

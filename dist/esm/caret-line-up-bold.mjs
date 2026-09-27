export const name="caret-line-up-bold";
export const id="dl_a93ce1f00bf748d9b589";
export const url=new URL("../icons/caret-line-up-bold.svg?v=2a6c9e2e328508910fd7cb7e86e3ce9d093fa32272709eab312b9689db7f7570",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

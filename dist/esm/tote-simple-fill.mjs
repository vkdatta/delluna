export const name="tote-simple-fill";
export const id="dl_cf96bbc83467ba4bbf5e";
export const url=new URL("../icons/tote-simple-fill.svg?v=8af1abf167f49268a6af50916f318b04d6a43ef00ce4b912219c3264aea491ff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="toolbox-light";
export const id="dl_f7e0ee0aabc243f4ab44";
export const url=new URL("../icons/T/toolbox-light.svg?v=e3d13548453b7a026eae1d949cc2283bc68443dcb8776fb02dd7e61d673491f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="selection-all-light";
export const id="dl_98714c2444d9bcb26293";
export const url=new URL("../icons/selection-all-light.svg?v=23651efa8e27e81962deee3d14a05b6720f91f0bc9f72bc6b69579649c2d6533",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

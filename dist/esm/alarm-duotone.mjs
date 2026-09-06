export const name="alarm-duotone";
export const id="dl_692cd3eae7814c3e87a1";
export const url=new URL("../icons/alarm-duotone.svg?v=ed36a5bc7f4f5a27785ebe7ff5cd8f9b09d582305c4081a077e763fcf5d1afd6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

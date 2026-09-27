export const name="arrows-split-fill";
export const id="dl_52d725e00898402c8473";
export const url=new URL("../icons/arrows-split-fill.svg?v=42da5630579c288348c4b227796b9a0333bf8fe6e99e27a03cc8c4c7c6ea1dfe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

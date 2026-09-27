export const name="selection-background";
export const id="dl_10d0ee2967730c5c2890";
export const url=new URL("../icons/selection-background.svg?v=b6c8aaf7f8148cfdd38af74de6c026dfd39af0b87d21c8ea715370d4edc01c50",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="ad_off-fill";
export const id="dl_7b529110b672c7576353";
export const url=new URL("../icons/ad_off-fill.svg?v=59bdde350ebbc6fca7b5926e45ea39bfdb6c045c52950a2f37e6b6388d154587",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

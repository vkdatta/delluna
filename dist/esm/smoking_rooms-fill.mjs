export const name="smoking_rooms-fill";
export const id="dl_ebf53801479b1cf9687b";
export const url=new URL("../icons/smoking_rooms-fill.svg?v=a71a79bfb1465bb71991bd360dfdb3371bf2a6adb0ee0db74d2fbd9464a62ada",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

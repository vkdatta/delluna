export const name="swipe_right_2";
export const id="dl_f060050ffbaea001db82";
export const url=new URL("../icons/swipe_right_2.svg?v=53888039637dd1e07d62c8597aa0ef85862965dd89be1d038d363e0008ae091d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

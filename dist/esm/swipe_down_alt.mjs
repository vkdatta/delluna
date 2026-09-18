export const name="swipe_down_alt";
export const id="dl_30a66da0bad34549bb73";
export const url=new URL("../icons/swipe_down_alt.svg?v=d96ea7d612315138d8bb553bcb47c620dc8e1892eeeb757ebe270bb1b5b5b6d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

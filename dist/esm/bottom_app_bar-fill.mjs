export const name="bottom_app_bar-fill";
export const id="dl_6bbf94604c474c759b3a";
export const url=new URL("../icons/B/bottom_app_bar-fill.svg?v=e2c986cd739790dce0269f464a4df49e0517724be9073be674a6612764f1f1e1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="watch_arrow_down";
export const id="dl_2df0fd7d5f7be16950a0";
export const url=new URL("../icons/watch_arrow_down.svg?v=c940e60faacfdfe9d751854a985297444d2a6ff95b156ea5e26396fe4ecfb20b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

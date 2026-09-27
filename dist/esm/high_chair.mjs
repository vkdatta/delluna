export const name="high_chair";
export const id="dl_6f20be9c7291ba3b359b";
export const url=new URL("../icons/high_chair.svg?v=93ff149233a15533775a4174397e8f98a5cc66a63f56c222f5838ef796a72ff6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

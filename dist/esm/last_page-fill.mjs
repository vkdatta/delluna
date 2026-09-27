export const name="last_page-fill";
export const id="dl_f423c00b68f6aab2a75f";
export const url=new URL("../icons/last_page-fill.svg?v=309f1e70fdb834b478551afc1568bde8fbd9d5cfe5e4eed886bd4ba3f8b03293",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

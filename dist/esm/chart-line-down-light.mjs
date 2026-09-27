export const name="chart-line-down-light";
export const id="dl_bd80847d9d1e44e5a39c";
export const url=new URL("../icons/chart-line-down-light.svg?v=b6eb42d7d6d60cef6a38746f94f99ce6ab49f2c3f765101171afdbc0dcda9120",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

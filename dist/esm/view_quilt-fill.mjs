export const name="view_quilt-fill";
export const id="dl_91b01aa077884e5aa692";
export const url=new URL("../icons/V/view_quilt-fill.svg?v=2879c897dc6f986610b60b09c1f506f6be1887305dc88cc97b50162757433de1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

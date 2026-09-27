export const name="caret-right";
export const id="dl_fe56bb78f99848e78d29";
export const url=new URL("../icons/caret-right.svg?v=9669a43662e2e82228aca221126b0ae5ff53ddfc9f80e71d2a326fe48d40ec65",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

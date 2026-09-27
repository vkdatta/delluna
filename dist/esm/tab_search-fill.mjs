export const name="tab_search-fill";
export const id="dl_6739a610efabe800920b";
export const url=new URL("../icons/tab_search-fill.svg?v=6e959490ed0fc9e40f72287103d72c0ebba56ec0fa181b7d9389b388a6adda62",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

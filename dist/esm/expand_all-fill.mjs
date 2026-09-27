export const name="expand_all-fill";
export const id="dl_1f5b93860fc94cea6f5a";
export const url=new URL("../icons/expand_all-fill.svg?v=2f59a76f631a6a3a575487bd0067d733c254080c158271d3de6704a978648887",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="pacemaker-fill";
export const id="dl_8916034c69af676c74e1";
export const url=new URL("../icons/pacemaker-fill.svg?v=8d1496c91202398b3a3d843863267ef49bf1a9d1e3f7a8b49c2d3efcb3e320a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

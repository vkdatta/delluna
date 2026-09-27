export const name="tooltip_2-fill";
export const id="dl_6c9a3d5759e8d510ee7e";
export const url=new URL("../icons/tooltip_2-fill.svg?v=2e2a17c01e2ef877cebb267f8e87ac024cdb47a6f79b67723a86997ee41e7b9d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

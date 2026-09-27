export const name="tire-fill";
export const id="dl_66dcaca03315e7635ffd";
export const url=new URL("../icons/tire-fill.svg?v=1eee6c484d620fc2993627db741ae238cacae50e7f81a3c6aaf1ab64166205f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

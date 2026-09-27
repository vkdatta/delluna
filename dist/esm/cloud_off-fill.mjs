export const name="cloud_off-fill";
export const id="dl_74b01388746ae3b6aaf1";
export const url=new URL("../icons/cloud_off-fill.svg?v=364cece39190290ceac8202872c04b9b4b257463d9bc3c3c12d03dbdb87ce28c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

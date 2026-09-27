export const name="file-zip-fill";
export const id="dl_4e477be4cffb485b985a";
export const url=new URL("../icons/file-zip-fill.svg?v=2c10b8909c7d028a715f9438a96f51fb332763e3afda0f674ea0f06f0b0c87c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

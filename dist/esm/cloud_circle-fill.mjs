export const name="cloud_circle-fill";
export const id="dl_0ac59688cf450f5031db";
export const url=new URL("../icons/cloud_circle-fill.svg?v=9d8597cfe8da9a764dcd51966adf3c780bed888cf8d7266d3b09a5cb4e3f4b48",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="door";
export const id="dl_a30e4e65e2f747e29528";
export const url=new URL("../icons/door.svg?v=5ab887101d3177545a7f1e2f5213ad2fee5ae4b8f28fd4cc4b2d72c29b9279ac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

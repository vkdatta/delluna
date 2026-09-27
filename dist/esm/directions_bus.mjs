export const name="directions_bus";
export const id="dl_95c41935cd8666def7b0";
export const url=new URL("../icons/directions_bus.svg?v=61b1f6d5762db9eea8e2c5c918e85728c981cc7215c6d6456a35f6367c0948e0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="massage-fill";
export const id="dl_88e9f88b1caaf0d84924";
export const url=new URL("../icons/massage-fill.svg?v=c44a7f73dbfd228cf7005b6f9e8a21ef5fbb485f56fadff539eac34fb98bbded",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

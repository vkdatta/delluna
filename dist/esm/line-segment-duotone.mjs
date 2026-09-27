export const name="line-segment-duotone";
export const id="dl_4b4adf30f6ff48d1b8f0";
export const url=new URL("../icons/line-segment-duotone.svg?v=9e56fd953a50eb3cee65952f6668220f452fd548d3d01c2b301b535c3acc3030",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

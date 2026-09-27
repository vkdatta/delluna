export const name="battery-empty-fill";
export const id="dl_b9686e4307d94e31bdad";
export const url=new URL("../icons/battery-empty-fill.svg?v=ee2dc7438ad67084039f6b5fbb38bbc851b2791ffed04b08e849f67e2ff60e3c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

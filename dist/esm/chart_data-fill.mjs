export const name="chart_data-fill";
export const id="dl_71be34e2bf67b32740a7";
export const url=new URL("../icons/chart_data-fill.svg?v=5dbdf4dcd85a64e45dcf324198be1c8e1b46bdfb964d92831800c08d88b848cf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

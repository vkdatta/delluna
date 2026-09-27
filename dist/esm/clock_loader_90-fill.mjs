export const name="clock_loader_90-fill";
export const id="dl_3227bec4fa3f5e48b88d";
export const url=new URL("../icons/clock_loader_90-fill.svg?v=f0e4f698e1d952066ef80203bbe8c07172d5c5457cb530eacf0193a5f37cfda8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

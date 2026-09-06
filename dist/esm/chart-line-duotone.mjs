export const name="chart-line-duotone";
export const id="dl_88789ca6cea942348a46";
export const url=new URL("../icons/chart-line-duotone.svg?v=1336718f6f42b0a6085da7cad2dbb681714dd8e4dce4acd38c8c1d7b68cfd20d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="frame_inspect-fill";
export const id="dl_4e8ed81d25ccacb02b7d";
export const url=new URL("../icons/frame_inspect-fill.svg?v=962424d3e6963dc9a3cfd75d9ec6912a8ec22ed6c15e6d958dcbc813d82fca3d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

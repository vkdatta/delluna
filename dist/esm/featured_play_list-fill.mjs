export const name="featured_play_list-fill";
export const id="dl_826bf8933ad658505ba0";
export const url=new URL("../icons/featured_play_list-fill.svg?v=4a20e0cb56328989f0a00e4faf9546bbb5f7622dbc325b4b2d0696774220e2f9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

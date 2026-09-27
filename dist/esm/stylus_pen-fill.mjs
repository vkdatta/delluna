export const name="stylus_pen-fill";
export const id="dl_a70503fa90baad07fe1e";
export const url=new URL("../icons/stylus_pen-fill.svg?v=54fb216f0e63d7f94e84add3ef7d67e55ca204417779f5cc355f707efad2d5a9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="spa-fill";
export const id="dl_a1e4605d3e07d089d3d8";
export const url=new URL("../icons/spa-fill.svg?v=e1fcb412d80816d557597028187141b79f03d5cf31f0ae82b86623df9b240024",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

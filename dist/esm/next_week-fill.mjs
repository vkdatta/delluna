export const name="next_week-fill";
export const id="dl_f31d9c635aad2a5000bc";
export const url=new URL("../icons/next_week-fill.svg?v=3b9d6c045345d739d856fdc09da21976f382b00d0c372b366a7c1ece43b623c6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

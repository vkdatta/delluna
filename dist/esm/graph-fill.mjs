export const name="graph-fill";
export const id="dl_237740bfad804fa1a40e";
export const url=new URL("../icons/graph-fill.svg?v=9d59286e9a71ff956668f33bf463c73363828ecad2031d2698ca4d6f01417ba3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

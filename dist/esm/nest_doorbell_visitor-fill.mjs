export const name="nest_doorbell_visitor-fill";
export const id="dl_608ccc4beb2cfdb680d3";
export const url=new URL("../icons/nest_doorbell_visitor-fill.svg?v=b1fe1d9ca9eea57b4ef608b69bfa277d6554322adbe40462684eae232c784066",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

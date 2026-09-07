export const name="shooting-star-fill";
export const id="dl_2851faea62d64ff584cb";
export const url=new URL("../icons/S/shooting-star-fill.svg?v=57455947016a999c86dd27ace601b320831853778dedbe0a5000a5fd23fbbe27",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

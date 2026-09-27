export const name="calendar-star";
export const id="dl_c0c3317eea284ed99da3";
export const url=new URL("../icons/calendar-star.svg?v=f197f61038b0bea806a556b9413558f1e3bfe50980ad3d3a1e8a3926b1bf3d47",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

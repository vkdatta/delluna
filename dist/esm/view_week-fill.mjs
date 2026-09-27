export const name="view_week-fill";
export const id="dl_d319185e5683cf6cfed5";
export const url=new URL("../icons/view_week-fill.svg?v=77e7834988ff6822a65e4d5c85ff5dcf34e5ef6f095fda6bb081514e07e8e827",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

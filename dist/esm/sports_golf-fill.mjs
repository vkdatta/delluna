export const name="sports_golf-fill";
export const id="dl_e3d3550a8a80ac13cc68";
export const url=new URL("../icons/sports_golf-fill.svg?v=47fffde93685e48e7d5e757aeab7a63fbc5dd2b127bb48bc5e3c76b355186c6c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

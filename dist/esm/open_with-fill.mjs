export const name="open_with-fill";
export const id="dl_1e630439b5d44ebcbff5";
export const url=new URL("../icons/O/open_with-fill.svg?v=5341a967f24f83d43473c97787d00aaccf9c2017dacbc5d92dd561881d16d0c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="unfold_less_double-fill";
export const id="dl_64cee7ddc38ab2624062";
export const url=new URL("../icons/unfold_less_double-fill.svg?v=4d1f050198235ed2b237408da50813140ef1c4c56b4b663ed949d4db780d38d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

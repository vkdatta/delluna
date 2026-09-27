export const name="icecream-fill";
export const id="dl_c6a6c72fd44f212db2dc";
export const url=new URL("../icons/icecream-fill.svg?v=5cd47dcbb1818301a35635a8ef5c68dd1005a713693aee9fc111c86380e8ad31",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="footprint-fill";
export const id="dl_421983ae30005c1cef5d";
export const url=new URL("../icons/footprint-fill.svg?v=eeb80de615a93b95e22563d8a35f50f880b80f365f59df91cc57a12e6cba8884",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

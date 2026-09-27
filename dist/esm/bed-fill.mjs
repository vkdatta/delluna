export const name="bed-fill";
export const id="dl_09418dbaf3084688972c";
export const url=new URL("../icons/bed-fill.svg?v=592af42f9965ade187e6497faa4fd009284a775ce48110caa0c7d21a92e7a978",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

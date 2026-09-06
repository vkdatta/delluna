export const name="brackets-angle-fill";
export const id="dl_a241307d59934fe48e3c";
export const url=new URL("../icons/brackets-angle-fill.svg?v=7b5c60cd24451db253700e4910511245b2ddb31c2d6feb8b679bbbb9e812f68d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

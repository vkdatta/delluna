export const name="popsicle-fill";
export const id="dl_f941a69b47644331ba92";
export const url=new URL("../icons/popsicle-fill.svg?v=a331be8bf6676d2bd2832b004166410564b67509dba261b688167d9feb6b1254",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

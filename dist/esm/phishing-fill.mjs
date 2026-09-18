export const name="phishing-fill";
export const id="dl_31dcd04fc3d042aa845e";
export const url=new URL("../icons/P/phishing-fill.svg?v=68ef73c4e24bb5884d33ffcdf34be8ae5384396a4d1da783dbef413b24d0d560",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

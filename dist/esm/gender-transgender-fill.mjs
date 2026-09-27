export const name="gender-transgender-fill";
export const id="dl_542ab075fba54632a490";
export const url=new URL("../icons/gender-transgender-fill.svg?v=a2df731192774308c760329aaaac46002619b132575cb61b53d6e7d1a51a8aae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

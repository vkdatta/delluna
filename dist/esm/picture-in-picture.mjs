export const name="picture-in-picture";
export const id="dl_be391b78ef4c4a2ba0d3";
export const url=new URL("../icons/picture-in-picture.svg?v=1321c7807732bd32bd1adea0087e66e493a72df67ae2475a7f1d9c4c4c9af447",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

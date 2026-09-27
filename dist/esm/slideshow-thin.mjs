export const name="slideshow-thin";
export const id="dl_2951e232d3d83d727809";
export const url=new URL("../icons/slideshow-thin.svg?v=5dd74d90c0fa5466007e1c4f002a906ec77ff86a19e0d993890955b5177b4e8a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

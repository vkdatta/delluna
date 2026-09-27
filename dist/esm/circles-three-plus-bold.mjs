export const name="circles-three-plus-bold";
export const id="dl_ff93c1899d4046cfb73e";
export const url=new URL("../icons/circles-three-plus-bold.svg?v=ce054d2ece03ab6967aeeac9bf3282566ff26fe457999c74f058a8c8fae59c23",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

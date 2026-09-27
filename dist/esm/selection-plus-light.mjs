export const name="selection-plus-light";
export const id="dl_266bb8f36a298c4aeba7";
export const url=new URL("../icons/selection-plus-light.svg?v=b0351455b19effeec62c74578b488e6299e2929ba84854f959cb447f4fd16942",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

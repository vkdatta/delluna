export const name="mouse-simple-light";
export const id="dl_409943d0f4c840f38817";
export const url=new URL("../icons/mouse-simple-light.svg?v=054e7f211370fe801635ea7fa99e91f64904db27598a26262852ea2f130edbf0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

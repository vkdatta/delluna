export const name="mouse-simple-light";
export const id="dl_409943d0f4c840f38817";
export const url=new URL("../icons/mouse-simple-light.svg?v=92b0ccef7ac12f9531144718edfd19acdab73c851ae14a7b947e4ae375060310",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="grid-four-duotone";
export const id="dl_4cc9c85b365a42b0baa7";
export const url=new URL("../icons/grid-four-duotone.svg?v=d8e3f41127c4c33f38eccb83d7c3a3b7229aa5cd646e2217275a909ccfb79b7e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

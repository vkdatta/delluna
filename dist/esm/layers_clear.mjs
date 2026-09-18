export const name="layers_clear";
export const id="dl_a54e487c7e3d4795b04e";
export const url=new URL("../icons/L/layers_clear.svg?v=060416b8c8bfb867b8e72b5f7268e6db9d0fcdf0f945170193fd7d8125000698",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

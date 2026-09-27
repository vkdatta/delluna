export const name="blueprint-duotone";
export const id="dl_ea0492c0d1f245a88af2";
export const url=new URL("../icons/blueprint-duotone.svg?v=2664f2a6c54f5b07a3ab008ea75155e5018ade42edd18e7599988d3bda23d285",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="umbrella-simple-fill";
export const id="dl_6005d785b6b215419a07";
export const url=new URL("../icons/umbrella-simple-fill.svg?v=201dd58f8105f885fe7a6c8b949e063e9101b05340a1c61520f73dc26f48351a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

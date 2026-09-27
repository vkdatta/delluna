export const name="shrimp-duotone";
export const id="dl_1fa0291ef6c49e7ecade";
export const url=new URL("../icons/shrimp-duotone.svg?v=9f10c9c7157d14cce11eccafa5adb87a5a9822d55b8e8293ed9cd3007b1aca8e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

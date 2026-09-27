export const name="hexagon-light";
export const id="dl_95316994c5764d228420";
export const url=new URL("../icons/hexagon-light.svg?v=7d359569ef574df2ec8be5da6a7d5f7c3c3005d4686adb07779f661bab7620f8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

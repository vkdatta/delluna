export const name="volume_down";
export const id="dl_f58b9c24ac43ffaee860";
export const url=new URL("../icons/volume_down.svg?v=288dcaf002e369a378adfb4f3b77cf594ec7ef0d3302319214cd7af9eeba2dca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="belt-fill";
export const id="dl_8f402f3d0fd44a83850b";
export const url=new URL("../icons/belt-fill.svg?v=436abdb712007f95ba7d0e6c6143d991979912a8113bcb6622e71fa7bae151ae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

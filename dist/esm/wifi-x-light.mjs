export const name="wifi-x-light";
export const id="dl_469276714f2b524d9790";
export const url=new URL("../icons/wifi-x-light.svg?v=513e22daf366e3537983fa88708594c472141b3346255d91fdcc40b6f888f9c6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="router";
export const id="dl_6d8fbf11155586721428";
export const url=new URL("../icons/router.svg?v=9da6032f9881c9d27b3e10bea3dc0420930da30d5b5ee570ecfe2811f3139264",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

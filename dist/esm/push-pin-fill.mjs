export const name="push-pin-fill";
export const id="dl_7d6efe3936474116b231";
export const url=new URL("../icons/push-pin-fill.svg?v=914882683d251184cbe61bb765af99f3de73bfb9a229243d71345bbfe58abbf9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="scribble-loop-duotone";
export const id="dl_fb57cd935b77485bbbec";
export const url=new URL("../icons/S/scribble-loop-duotone.svg?v=2e6daa0658584647e6a6c5014f0f3f881a2dd09882e0541f78ff5d5e7af4b755",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

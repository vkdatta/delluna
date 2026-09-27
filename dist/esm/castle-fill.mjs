export const name="castle-fill";
export const id="dl_21b288210e5165a69a4d";
export const url=new URL("../icons/castle-fill.svg?v=2b70fca461d09b16efbb09d76904f4b2709274f32f83b3927e22f4ee2306aab6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

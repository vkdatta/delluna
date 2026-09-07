export const name="text-underline-bold";
export const id="dl_119a32d2359d443a8556";
export const url=new URL("../icons/T/text-underline-bold.svg?v=2d161680461b7e9c2e1c33e95cf580728c367cfa9d2ff51bcea1c38e946a71c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

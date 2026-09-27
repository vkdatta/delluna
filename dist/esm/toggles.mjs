export const name="toggles";
export const id="dl_41120482966d7fafe365";
export const url=new URL("../icons/toggles.svg?v=84560dd2732e41f4efe42408a65fe9bad3a8b59f8926cda7265418b55f0c194e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

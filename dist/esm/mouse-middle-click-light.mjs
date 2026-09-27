export const name="mouse-middle-click-light";
export const id="dl_a228d5de742f47238fb6";
export const url=new URL("../icons/mouse-middle-click-light.svg?v=a397f48a539526b13f2ee58828c6929718da339efe82b0e3ab5f0dd54536d6fd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

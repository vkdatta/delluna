export const name="folder-simple-minus";
export const id="dl_cea81c08e3a948289a0f";
export const url=new URL("../icons/folder-simple-minus.svg?v=66de9fc67e720295ec89654de6664893628702c0409083834e22d124989fd459",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

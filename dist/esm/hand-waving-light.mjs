export const name="hand-waving-light";
export const id="dl_20cb6ddf421e4804a3f7";
export const url=new URL("../icons/hand-waving-light.svg?v=f3faf7366bbb18b3d74bd44abd8004b058b215e34773ce7eb422dc6083dd17e0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

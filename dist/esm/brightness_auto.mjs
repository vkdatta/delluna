export const name="brightness_auto";
export const id="dl_03441effe7efa932b1ec";
export const url=new URL("../icons/brightness_auto.svg?v=95dabda3dc295728c1a69ca568efcd97508157fc900645137fc9ad29087d449d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

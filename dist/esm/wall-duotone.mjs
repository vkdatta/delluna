export const name="wall-duotone";
export const id="dl_56babe412a7927ff49bf";
export const url=new URL("../icons/wall-duotone.svg?v=d2046c8f1e9e2ae309ca5c88df03d512005a0d249e8fdd6a615a12399f58ba38",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

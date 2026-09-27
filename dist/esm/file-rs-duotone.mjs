export const name="file-rs-duotone";
export const id="dl_6f789b7c4e0f46c3a6ee";
export const url=new URL("../icons/file-rs-duotone.svg?v=f000d0e316a9c7e4ab202f4330f9279f4e73824438de8d775c57dffa2fb0a491",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

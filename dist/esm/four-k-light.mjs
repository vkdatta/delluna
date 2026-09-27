export const name="four-k-light";
export const id="dl_5f4d3ed6fe464fdb8e3f";
export const url=new URL("../icons/four-k-light.svg?v=37f4424bab5639d4b5a179dd41182823d5e537e8c7f04343f2b0afb9b4c7b5f2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

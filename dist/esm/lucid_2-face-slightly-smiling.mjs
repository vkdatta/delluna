export const name="lucid_2-face-slightly-smiling";
export const id="dl_a374ab28a6aa40ebbcc7";
export const url=new URL("../icons/lucid_2-face-slightly-smiling.svg?v=931d23d37a60ebda42e2ca02b1d27201dc9c121b768ab6a89eaeeb3befd564d4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

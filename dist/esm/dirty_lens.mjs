export const name="dirty_lens";
export const id="dl_ab9c61f792c431985131";
export const url=new URL("../icons/dirty_lens.svg?v=18700b02fbb007785fe0aeed0e0b2f18fb80069c120a0ee569cd8f37e719a4fc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="brain";
export const id="dl_159cb819888b4d178699";
export const url=new URL("../icons/brain.svg?v=060f8d151a39629d8ae866bf1aac07d0759e0fb19a7e7b04cafbce8bfdb28380",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

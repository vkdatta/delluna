export const name="tote-light";
export const id="dl_8c9f9529faeb76f982d6";
export const url=new URL("../icons/tote-light.svg?v=4364bbf05197958f8884016a50af5a9ca94dca06d296670270828aa42aa53263",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

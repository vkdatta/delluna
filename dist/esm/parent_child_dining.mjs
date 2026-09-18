export const name="parent_child_dining";
export const id="dl_4e42d6c909e84a28bef1";
export const url=new URL("../icons/parent_child_dining.svg?v=9c1f41d7bced0ff592df30d0a42d0c9ed0ee5b644f75f780571063ae10ac93c3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

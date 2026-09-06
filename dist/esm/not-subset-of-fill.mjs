export const name="not-subset-of-fill";
export const id="dl_5efefad7de73453f9fb9";
export const url=new URL("../icons/not-subset-of-fill.svg?v=e1ca1f8e7839e783a3f3599a05912267048ac6a21e34d6f9fcf7490819ea1a51",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

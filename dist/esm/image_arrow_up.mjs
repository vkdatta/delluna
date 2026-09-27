export const name="image_arrow_up";
export const id="dl_a6d1d025ee4fca979a99";
export const url=new URL("../icons/image_arrow_up.svg?v=4c63bab8b985ea2ee174df4abc6704ceca93d53242329da35ad14535a269f44d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

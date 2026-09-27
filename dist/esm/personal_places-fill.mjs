export const name="personal_places-fill";
export const id="dl_add098123c51bf7d9660";
export const url=new URL("../icons/personal_places-fill.svg?v=13ffac678c56f99567980e21b06190c89fc0d1ea57978f776c4763c81225b1b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

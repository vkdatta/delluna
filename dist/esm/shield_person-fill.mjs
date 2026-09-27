export const name="shield_person-fill";
export const id="dl_d56bd94fb7cd6c230bb1";
export const url=new URL("../icons/shield_person-fill.svg?v=a4af1b6c2922ac94ecf7e676870df28d41974bf3f49dabc031413422193af2bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

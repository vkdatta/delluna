export const name="shield_lock";
export const id="dl_6dcc47cc404171984e88";
export const url=new URL("../icons/shield_lock.svg?v=ecd9fca472c3f41d5deeefd4d657ded59c333b08f46f103a9b8a2ba36b3d6804",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

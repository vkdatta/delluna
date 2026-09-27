export const name="local_florist-fill";
export const id="dl_f08916dd16be7946c386";
export const url=new URL("../icons/local_florist-fill.svg?v=9e6e268ec721b7ff626c057a9ae0bbdfc942497a4b11c17b65f8d8f83c45150d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

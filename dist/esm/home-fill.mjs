export const name="home-fill";
export const id="dl_53c5c5639157c95fa7b7";
export const url=new URL("../icons/home-fill.svg?v=693568cfeb6bb09a4a17dc03c73bbb11e57dd78c46bd016f58918de32d283431",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

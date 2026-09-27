export const name="dots-three-outline-fill";
export const id="dl_01ef6bf55c1641ca8f9d";
export const url=new URL("../icons/dots-three-outline-fill.svg?v=32d8681d199ea63d003222015c0b7aed45ee0535a813864b99c8cc40584a490d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="keyhole-fill";
export const id="dl_1f2f43ce9fc8448daa08";
export const url=new URL("../icons/keyhole-fill.svg?v=ff8e609c266bbdd523ae9a72ecf9da1dc9a1c26ede4612cac01f72508a2ae9e7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

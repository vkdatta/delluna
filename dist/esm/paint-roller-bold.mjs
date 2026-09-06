export const name="paint-roller-bold";
export const id="dl_b057d176e86943b791d7";
export const url=new URL("../icons/paint-roller-bold.svg?v=9266a06d98e5bb4207666e21f5813216b6e9a9acc97b790fd39e767c5a1bfd57",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

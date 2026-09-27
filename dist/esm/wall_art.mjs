export const name="wall_art";
export const id="dl_c23d55220b52fcd7f246";
export const url=new URL("../icons/wall_art.svg?v=a4eb1ed3cc12854c25abe71fc8debe69c368d371bba64b0ef3fb907e317c4aea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

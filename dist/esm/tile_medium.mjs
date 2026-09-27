export const name="tile_medium";
export const id="dl_5010e887b6dde8f4075c";
export const url=new URL("../icons/tile_medium.svg?v=7f7983e4f19133d74fded9dd3bdc889cb70ab660d6a1ce145fd651ecd20ccfe8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="dots-three-circle-fill";
export const id="dl_5246f457c6a845ab94c9";
export const url=new URL("../icons/dots-three-circle-fill.svg?v=bb3f99c53eb1017dfbcace74b88041aca5d7d96f308454e66526f68d4b3ba41e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

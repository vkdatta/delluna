export const name="film-reel-bold";
export const id="dl_8a6afb5db3ba4ccf9022";
export const url=new URL("../icons/film-reel-bold.svg?v=5911afd4222976b962648fd9cc378179433b7b08dbc14f6901610b859cc452d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="film-reel-bold";
export const id="dl_8a6afb5db3ba4ccf9022";
export const url=new URL("../icons/film-reel-bold.svg?v=1c4d7e067dfb59b612ae866b81c25d25799947cd3b294870dba8185d2debdd77",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

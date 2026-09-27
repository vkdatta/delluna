export const name="healing-fill";
export const id="dl_7ef5faa635c9aed1d453";
export const url=new URL("../icons/healing-fill.svg?v=ab3f280db00189c81c1fb46cc7b918bbbf9660e094afa965114d68483859b6bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

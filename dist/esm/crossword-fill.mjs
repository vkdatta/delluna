export const name="crossword-fill";
export const id="dl_1d8703ba6f758e6205bc";
export const url=new URL("../icons/crossword-fill.svg?v=7dbd3aefa5b98e0c7a9d8b057b18631b4340adecf3268ac826f01bc9dd666a62",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

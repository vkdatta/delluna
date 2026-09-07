export const name="standard-definition";
export const id="dl_5b43c881eb254bbbab8d";
export const url=new URL("../icons/S/standard-definition.svg?v=32ae90c05d2b7b193a313c1827ff3f41f75aa081c7afe5c96eebb90dd0d4b9f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

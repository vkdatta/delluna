export const name="bug";
export const id="dl_44dbff2f81d74df69e6d";
export const url=new URL("../icons/bug.svg?v=05041640c72e5cccc75ffe9b5138ff173c8097ee75183f231deeadcdf108dd0a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

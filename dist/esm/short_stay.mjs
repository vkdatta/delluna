export const name="short_stay";
export const id="dl_22313c2ba11894cb5024";
export const url=new URL("../icons/short_stay.svg?v=6ace1d738910f0af67fc28bb85327547c85056a535445273ca02f0d0d40c994c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

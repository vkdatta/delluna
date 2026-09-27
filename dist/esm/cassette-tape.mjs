export const name="cassette-tape";
export const id="dl_5fb7052062fb4de8b6e5";
export const url=new URL("../icons/cassette-tape.svg?v=399a88bccd480c068a80f4e02d4fca93e8b9149acd728b29f2aade023e8ce803",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

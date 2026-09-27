export const name="record-bold";
export const id="dl_67d49e8a1cdb489a9d73";
export const url=new URL("../icons/record-bold.svg?v=8a38041b069f8c0c0aee9fbbd64e52475408a04cdda931e3ab56dd0a6ed1ceaa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

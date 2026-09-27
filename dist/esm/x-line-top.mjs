export const name="x-line-top";
export const id="dl_73ba9aca676a4a6a9015";
export const url=new URL("../icons/x-line-top.svg?v=d0b2fbf08b890005cc39b9d4513dc96996571495fb853ad90557cba11d4af4ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="iron";
export const id="dl_8fb4992e3ef3adbfbd55";
export const url=new URL("../icons/iron.svg?v=ee18e373432ab7ee79824f24ca061af1b497598da77b8a2ab07e6faa9c24565c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

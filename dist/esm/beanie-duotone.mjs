export const name="beanie-duotone";
export const id="dl_94bb09d63c954699ad54";
export const url=new URL("../icons/beanie-duotone.svg?v=2b754fbff4460c8641b1dc613bca25fea6cbc290533b1b079cfcfc77daec36b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

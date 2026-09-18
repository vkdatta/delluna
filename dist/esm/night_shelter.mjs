export const name="night_shelter";
export const id="dl_37edb1a23d6141b4bbb4";
export const url=new URL("../icons/N/night_shelter.svg?v=ffebdf715e8c77f9012fa3c4a195849edd9e68d3446fadee6c32e5448850f928",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

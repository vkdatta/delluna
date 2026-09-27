export const name="greater-than-bold";
export const id="dl_86ad73b67a22459baf0c";
export const url=new URL("../icons/greater-than-bold.svg?v=215c682e56ccaa35c83fda8cd64cd65e04642f17ea69860c4c8e001e6df45e56",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

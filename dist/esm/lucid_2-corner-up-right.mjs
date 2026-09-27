export const name="lucid_2-corner-up-right";
export const id="dl_5301c6d5fa4e40498021";
export const url=new URL("../icons/lucid_2-corner-up-right.svg?v=bfd5c1a78ca9ab7f435f0d71b4375b36774e7a2d25a1c1ab6659125ae861fb06",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

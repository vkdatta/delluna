export const name="lucid_2-lens-convex";
export const id="dl_85f41969e5164830b7c7";
export const url=new URL("../icons/lucid_2-lens-convex.svg?v=11fb1bebd52f5ca9a04e92236989d647fe5a151020f7bfd22d83351974afd9f3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

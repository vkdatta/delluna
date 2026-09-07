export const name="smiley-meh-bold";
export const id="dl_1ab6ea72c5554d4d9e23";
export const url=new URL("../icons/S/smiley-meh-bold.svg?v=fc7a8d89cb756ee8546a42f8f59a7155ecbc4c7b35cb2785baca8d881d3d403f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

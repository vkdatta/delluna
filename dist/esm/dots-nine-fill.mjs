export const name="dots-nine-fill";
export const id="dl_359188b27a284f66a434";
export const url=new URL("../icons/dots-nine-fill.svg?v=94cd5e5ab0bcf09d02da3122504562267cc8972136dab5739fb84a55c866c6ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

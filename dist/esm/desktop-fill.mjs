export const name="desktop-fill";
export const id="dl_a3e5cddad80a45abab30";
export const url=new URL("../icons/desktop-fill.svg?v=2aae552beb44429c5f8ca96d803ca1a761d29c39384f00f4e9e3b4c0ec562c2d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

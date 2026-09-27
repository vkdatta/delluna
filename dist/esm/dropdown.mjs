export const name="dropdown";
export const id="dl_c2ff8157166a277e6dec";
export const url=new URL("../icons/dropdown.svg?v=0907844022830d44e0ef5ead91c55e9ff86145e4502a15c34647df77e49b87a5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

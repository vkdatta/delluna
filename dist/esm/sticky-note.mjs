export const name="sticky-note";
export const id="dl_06a29c16f64746849052";
export const url=new URL("../icons/sticky-note.svg?v=1e995a368b0709e17589386e7d5cc51685bfffafa79011615e040268378539cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

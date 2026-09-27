export const name="plus-minus-fill";
export const id="dl_971b891feaa44c23b17d";
export const url=new URL("../icons/plus-minus-fill.svg?v=f3c8d2a872bcf4ea345f974fb423fb686c5659cc962d48e81715a8fab48c237e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

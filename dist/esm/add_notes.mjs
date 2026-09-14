export const name="add_notes";
export const id="dl_dafba77f8e264116bdf5";
export const url=new URL("../icons/A/add_notes.svg?v=fd4791d57901e2145b399dda904c7bda7e1165cf00cbbe14c64fd91c7db11497",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

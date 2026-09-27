export const name="measuring_tape-fill";
export const id="dl_c42884fd65b5b8e09153";
export const url=new URL("../icons/measuring_tape-fill.svg?v=03d9848dce0ba16a13dc2e6e2231b45aabc39af152ed67a1a933656feea1aa24",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="man_2-fill";
export const id="dl_0a8a25531384a75ebef0";
export const url=new URL("../icons/man_2-fill.svg?v=9adc525b8e6e1bb8d6fa0fa3cbbc2986fe630446c04aae13352770ce78c506ae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

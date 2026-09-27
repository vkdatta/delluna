export const name="flash_auto";
export const id="dl_0b513d6a1ea8c6df3d7f";
export const url=new URL("../icons/flash_auto.svg?v=0d4462a0e75217abe9b5a5be02a4af74a1beb768b504cedf0a0b28e3a11e6825",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

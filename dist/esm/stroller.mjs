export const name="stroller";
export const id="dl_37ee17f7865454551b54";
export const url=new URL("../icons/stroller.svg?v=16a947e00b0533d1e49607618c3e795c4123a069fb8308d9c09e9a5055d9ab6e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

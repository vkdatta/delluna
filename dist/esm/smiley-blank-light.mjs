export const name="smiley-blank-light";
export const id="dl_950a2a5c46134bb8aeb7";
export const url=new URL("../icons/S/smiley-blank-light.svg?v=494fd214917ed4685fd431e26413417d0f81949a579e4a97771ea87a162644b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

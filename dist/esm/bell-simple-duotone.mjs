export const name="bell-simple-duotone";
export const id="dl_f92b69dd26154e4d9928";
export const url=new URL("../icons/bell-simple-duotone.svg?v=4ebdc856d66bd33d65afec4785f0cc1eeb18a6b466daeb00e298fe8202ecf98d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

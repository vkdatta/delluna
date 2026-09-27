export const name="no_sound-fill";
export const id="dl_cff7c8d38f9790b6cd8d";
export const url=new URL("../icons/no_sound-fill.svg?v=a1f8b5e2631a8356af8c2fff0e1ad78af6f65effe3ef2af719aa980af4ee1b7d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

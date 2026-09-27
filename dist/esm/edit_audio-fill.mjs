export const name="edit_audio-fill";
export const id="dl_ce06515ff944e0e11cfa";
export const url=new URL("../icons/edit_audio-fill.svg?v=3cbe3b18ad140ffdf4c7e2e71540177415ae1a27cccfce12530a4041c275874c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

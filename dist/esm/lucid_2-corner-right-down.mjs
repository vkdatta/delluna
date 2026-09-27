export const name="lucid_2-corner-right-down";
export const id="dl_fc6e11c02e4d4141adeb";
export const url=new URL("../icons/lucid_2-corner-right-down.svg?v=efa1862bec250d3c56229047d6bcfc69eb874a2d2a58ea787912baf8ae365117",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="unfold_less-fill";
export const id="dl_cb223e64fc5c8c19bcc1";
export const url=new URL("../icons/unfold_less-fill.svg?v=0785f3fe72b4b76174905eeb4b42734ec4af90b5f156c7c7c1dd69ccff0ff605",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

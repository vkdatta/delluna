export const name="sound_sampler-fill";
export const id="dl_5650bf72345dc7f93b3a";
export const url=new URL("../icons/sound_sampler-fill.svg?v=9c5d0c14e031cfd9adca23fc3da30f5d27a030d5fefd49d76c071ececb22bb04",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

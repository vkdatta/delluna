export const name="lucid_1-bell-minus";
export const id="dl_c353882438f64dc59d56";
export const url=new URL("../icons/lucid_1-bell-minus.svg?v=f5814066d17d42fea301fd9dad21c3f707adbd8ae4567d1cd087b4700d733f3c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

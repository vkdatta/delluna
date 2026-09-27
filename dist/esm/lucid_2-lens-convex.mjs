export const name="lucid_2-lens-convex";
export const id="dl_85f41969e5164830b7c7";
export const url=new URL("../icons/lucid_2-lens-convex.svg?v=f162a54a24b306140335f80b7c375c98ffd1209bae97a98eb80f1f39ab3b5461",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

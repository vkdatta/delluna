export const name="wall_art-fill";
export const id="dl_9866aab3c2ff804f288b";
export const url=new URL("../icons/wall_art-fill.svg?v=b08e4cddbf70956e13e2a003eeb2017a5885ee9f0640f1789cca83368046e7b3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

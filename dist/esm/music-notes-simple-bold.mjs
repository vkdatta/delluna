export const name="music-notes-simple-bold";
export const id="dl_bcfab291e18440c185e5";
export const url=new URL("../icons/music-notes-simple-bold.svg?v=8df7dbf5bb9c264a4920b7ea62251e4be75cdefc955004eff713ac1145323380",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

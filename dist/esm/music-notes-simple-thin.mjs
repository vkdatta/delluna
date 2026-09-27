export const name="music-notes-simple-thin";
export const id="dl_b6ad9ccbf3b94abd93e5";
export const url=new URL("../icons/music-notes-simple-thin.svg?v=2ab1ecaf4a82c218171aeed7510a3d5a6d1ea2d978d1698bc0f6e530afe3518b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

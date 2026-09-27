export const name="frame_bug";
export const id="dl_f0eb7140b16c6f3c770d";
export const url=new URL("../icons/frame_bug.svg?v=7a56cb41576fba9ae26ee1a7a70bb0a944e15626f9387eba1f1f392283666f2d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

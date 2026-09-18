export const name="waving_hand-fill";
export const id="dl_3fd1d507dc3e4a888010";
export const url=new URL("../icons/waving_hand-fill.svg?v=8603317b801a17b9fc487a7ee43380d33da9749c500743b5281a30b54f9cf582",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

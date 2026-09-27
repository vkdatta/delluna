export const name="smiley-meh-thin";
export const id="dl_7db3083b6e35541e19ab";
export const url=new URL("../icons/smiley-meh-thin.svg?v=426c72ad523579bf6cb175f438773168770cefd6fa92c6d0f5c9adb4b5fe8597",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

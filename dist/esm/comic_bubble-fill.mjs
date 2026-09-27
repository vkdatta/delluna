export const name="comic_bubble-fill";
export const id="dl_95b4ead61fd12eea7ff4";
export const url=new URL("../icons/comic_bubble-fill.svg?v=4d3b043ceca582b51805020ab1dfaab95427377c6595885d2728a8200427dbae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

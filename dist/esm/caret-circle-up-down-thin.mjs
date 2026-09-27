export const name="caret-circle-up-down-thin";
export const id="dl_64dde4d012594daaab12";
export const url=new URL("../icons/caret-circle-up-down-thin.svg?v=4fc7a2a0c12882950dc84b70f40d88cb26a2fede4b356672821fbd3204523cc4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="speaker-fill";
export const id="dl_249ea3b1b31a6f5cd028";
export const url=new URL("../icons/speaker-fill.svg?v=eb298efa4822dfb91718ceb34c17d2a365e9105c6f433e461bd04c9f08c5194d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

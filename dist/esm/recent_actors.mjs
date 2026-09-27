export const name="recent_actors";
export const id="dl_1fedd657fea590ce891f";
export const url=new URL("../icons/recent_actors.svg?v=12d8f4ea81fc82faf85a185a618dc654d2061400842d501b6d0233a9dc18e79c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

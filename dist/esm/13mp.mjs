export const name="13mp";
export const id="dl_7cf2ba72f7930e9729ed";
export const url=new URL("../icons/13mp.svg?v=fe4a33c7746bf1c97d154c0103390f75fa643da916f4aaae23cb7de74b5de291",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

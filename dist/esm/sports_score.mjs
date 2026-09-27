export const name="sports_score";
export const id="dl_94930a4e4d5c2093f270";
export const url=new URL("../icons/sports_score.svg?v=92d5a87fd1d69b62c4b591f2652eaa08eea81a52d3639c538962cd63a8a71479",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

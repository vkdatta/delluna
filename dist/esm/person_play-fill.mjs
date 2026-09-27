export const name="person_play-fill";
export const id="dl_f3e754c5a42abcd63dfd";
export const url=new URL("../icons/person_play-fill.svg?v=2e86c992b6bc33cdf2344ffeda436e9fdd2578fe1ecfa944f6065749d3cbaa8f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="airplane-tilt";
export const id="dl_a9a1fb06f8604c4b9e6a";
export const url=new URL("../icons/airplane-tilt.svg?v=4f1f2a22af809208933e6d459aab7d4a8c02c42819606e625bbca563caccf392",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

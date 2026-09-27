export const name="sports_bar";
export const id="dl_03ea49dd6104eabe94e7";
export const url=new URL("../icons/sports_bar.svg?v=724e683e40a5cb907979bf9fc69d57fb9a94270e0b4f6074948a2172b3db78f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

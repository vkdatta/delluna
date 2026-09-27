export const name="screwdriver-light";
export const id="dl_f2234b60e87f713ee03f";
export const url=new URL("../icons/screwdriver-light.svg?v=b3b31d9ff2883dda21ea448122d70a972dbea753667fc5acd85e2c916270384d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

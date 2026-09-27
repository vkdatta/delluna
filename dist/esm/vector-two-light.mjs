export const name="vector-two-light";
export const id="dl_83356fc23fb57fdbbbc0";
export const url=new URL("../icons/vector-two-light.svg?v=d4a23c7ed0e9e98fb9acf326764bf69763b8729ab2a3d6b0834a81700bd998a8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

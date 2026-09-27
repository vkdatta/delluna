export const name="tangent";
export const id="dl_91f588d0479c42f289b7";
export const url=new URL("../icons/tangent.svg?v=ad2cd29da711797ce33d5f7de9c3e5685259e19abf8da94e75fb287463ffd705",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

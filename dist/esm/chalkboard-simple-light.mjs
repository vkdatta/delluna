export const name="chalkboard-simple-light";
export const id="dl_1bd181816b0b44a0b32d";
export const url=new URL("../icons/chalkboard-simple-light.svg?v=31f60174e09137f99db324457c5bc38e18d7a8e0740eabcebfb3724b916ad844",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

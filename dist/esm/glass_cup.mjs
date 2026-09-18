export const name="glass_cup";
export const id="dl_44cb53ae2c0041549bd3";
export const url=new URL("../icons/G/glass_cup.svg?v=cb468e45b923ae24b19682cfcb07d1c072bd1171c46a839189d38624c96a1a5f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="lifebuoy-bold";
export const id="dl_bbbb5828cff5450383fd";
export const url=new URL("../icons/lifebuoy-bold.svg?v=0660b4edd3c4c24f4b6f781597c8ad457ef1a8eb6d9ce6040028e339b2e4218f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

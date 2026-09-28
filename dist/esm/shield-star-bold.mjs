export const name="shield-star-bold";
export const id="dl_79c2ce454caae126fffe";
export const url=new URL("../icons/shield-star-bold.svg?v=66e35f0f9a7ddaab3637927bd48ad7c4280ecf60c1408cbb90b961cf2058d695",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

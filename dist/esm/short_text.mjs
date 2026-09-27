export const name="short_text";
export const id="dl_a012d2b4b68c5a403101";
export const url=new URL("../icons/short_text.svg?v=79cb7a24ad83266d42edcdc5893f48c361c3dae243a2c2594f1456ff55a03e81",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="gender-nonbinary-light";
export const id="dl_5dea611bbbc7480c9b69";
export const url=new URL("../icons/gender-nonbinary-light.svg?v=09c7be894a27150c111db45794973614c3674728d5984c6eea7336d2ec36ae7a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

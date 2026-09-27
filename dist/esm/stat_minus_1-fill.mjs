export const name="stat_minus_1-fill";
export const id="dl_11ace8e0cde9774c3a86";
export const url=new URL("../icons/stat_minus_1-fill.svg?v=8dbeda5648b4c223d1995874b234b87aafa31d0c4f33ea7934580d2b69061866",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

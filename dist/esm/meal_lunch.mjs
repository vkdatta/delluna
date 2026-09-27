export const name="meal_lunch";
export const id="dl_be9fb013cf2d40ca2497";
export const url=new URL("../icons/meal_lunch.svg?v=86f57459ca0e44936c0f30573838244558d981a8c404831f34c3feabc51b7768",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="meal_lunch";
export const id="dl_596ec684991a4198ab17";
export const url=new URL("../icons/M/meal_lunch.svg?v=f69bf35e06023fd3047d978061c19dede3dc33bcf36d90b6e6db06b15aaa8366",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

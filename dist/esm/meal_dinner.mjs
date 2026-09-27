export const name="meal_dinner";
export const id="dl_88f48cffcbb290129ee9";
export const url=new URL("../icons/meal_dinner.svg?v=db11900071fa184567d297bb29c034d8be154d83549deb68faba05f079f02e96",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

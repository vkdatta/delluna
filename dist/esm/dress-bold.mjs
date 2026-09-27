export const name="dress-bold";
export const id="dl_97aac736a4a34e088f59";
export const url=new URL("../icons/dress-bold.svg?v=21237800a24628e47d1e0aa4cae9e8aa2ea48c33cc97cfa36680d165739358a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

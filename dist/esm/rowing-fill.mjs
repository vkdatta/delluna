export const name="rowing-fill";
export const id="dl_ea46061ac4ec7c2bf90f";
export const url=new URL("../icons/rowing-fill.svg?v=67514091a88928c9462e90b406b91b84542b42c103ec948f7da18bb53e7c2949",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

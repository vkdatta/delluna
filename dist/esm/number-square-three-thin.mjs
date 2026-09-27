export const name="number-square-three-thin";
export const id="dl_e46e503ae74045e1a2dc";
export const url=new URL("../icons/number-square-three-thin.svg?v=fd0ff2ce3ca7ced797c1cc42d5290748e918aa8e4325c9ba21c381b1ae5a7254",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

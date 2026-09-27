export const name="number-square-three-thin";
export const id="dl_e46e503ae74045e1a2dc";
export const url=new URL("../icons/number-square-three-thin.svg?v=3f0f48fd7df0cdf317d0469cfbcf41e4c2c988485918ab1fc8c3f8d5485a2b42",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="exercise";
export const id="dl_2d943719824a44debc12";
export const url=new URL("../icons/E/exercise.svg?v=379a620e242da00fb96cad57fe0c42032a28af6a9833df7bd944817798d041b3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

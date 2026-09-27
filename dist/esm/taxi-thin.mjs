export const name="taxi-thin";
export const id="dl_40941aa2e138972452d1";
export const url=new URL("../icons/taxi-thin.svg?v=17b319974478c4943b3e3166360213ed170e4f1ac3bec2e9d572fe3431d51fa3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

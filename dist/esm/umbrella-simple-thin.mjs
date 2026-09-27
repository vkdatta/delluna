export const name="umbrella-simple-thin";
export const id="dl_776e9278e70b100c10cc";
export const url=new URL("../icons/umbrella-simple-thin.svg?v=93eb16c6ef59105e41a5c7bbf8419ae93c5de3030993d4062448a1e05ad96d3d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

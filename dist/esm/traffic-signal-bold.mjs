export const name="traffic-signal-bold";
export const id="dl_a883ff99df5a303a3f7b";
export const url=new URL("../icons/traffic-signal-bold.svg?v=9013950d3cbe4d1d8044dde407a417d3bbdffd7994e9abf2914f04137e9fd0e0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

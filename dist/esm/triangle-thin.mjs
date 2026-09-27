export const name="triangle-thin";
export const id="dl_51fccd8617578c266ec7";
export const url=new URL("../icons/triangle-thin.svg?v=69d7900ed0dbc50d160abf67a0c94c59b6fbec6c0f27c0c396dd5269c811ac83",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

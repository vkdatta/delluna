export const name="number-circle-one-thin";
export const id="dl_54c9839280eb4b73bc23";
export const url=new URL("../icons/number-circle-one-thin.svg?v=a3f7712cd6720d1fa60dc243253a86c4aae66d90950e24f5476bd704cd05be22",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

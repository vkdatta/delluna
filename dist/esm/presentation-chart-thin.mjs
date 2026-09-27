export const name="presentation-chart-thin";
export const id="dl_ccf195a849c9494da69c";
export const url=new URL("../icons/presentation-chart-thin.svg?v=9f31b1dc5e55eb184f8c9bfa3e9ce5c6dbfb01f176358e12bb9af763ecf0e690",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="island-bold";
export const id="dl_5540819d70f4488d98d5";
export const url=new URL("../icons/island-bold.svg?v=533dd53b854b97feb09602cefbee43447bbcd8258113ed9a38dcc07afb23f7f9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

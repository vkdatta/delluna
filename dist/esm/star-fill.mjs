export const name="star-fill";
export const id="dl_5995be20e291fcd03b18";
export const url=new URL("../icons/star-fill.svg?v=75705bc78a4fc8e86977f761ba45c06dc58a9a80a452ef33e1f9fb416d2a2208",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

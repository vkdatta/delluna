export const name="circles-four-light";
export const id="dl_05a0281203a54eb28f72";
export const url=new URL("../icons/circles-four-light.svg?v=29a635c1e52e700342252c807035f995e0ca8459e2a8c3aefd53eb4fda10c65b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="gear-six-fill";
export const id="dl_92748fed9948492cb100";
export const url=new URL("../icons/gear-six-fill.svg?v=93f11b9af9fff4adaa4f542ab0d02231585298551cefe240fe2e4469be120d50",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

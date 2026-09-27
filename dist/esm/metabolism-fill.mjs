export const name="metabolism-fill";
export const id="dl_448cd5b6b9f4060b30a3";
export const url=new URL("../icons/metabolism-fill.svg?v=776229dbfe7bb749b587401de0f714094075505fb214a639cb021f23352ab4e7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

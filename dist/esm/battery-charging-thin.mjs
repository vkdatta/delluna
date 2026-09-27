export const name="battery-charging-thin";
export const id="dl_c1ec99666fe2412dbc4d";
export const url=new URL("../icons/battery-charging-thin.svg?v=09615e43108dad8caf469e141066c05af8ab39e7ae1a9e598d3f6e023d99eb2e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

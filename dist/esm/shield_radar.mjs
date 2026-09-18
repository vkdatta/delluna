export const name="shield_radar";
export const id="dl_7751418796c7451a9830";
export const url=new URL("../icons/shield_radar.svg?v=b97e1a386990e3f1fa874c58a65c13b5e08c4d99b75e9d91405556b23f237e47",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

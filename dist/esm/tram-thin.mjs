export const name="tram-thin";
export const id="dl_c1041c33d54d4ac673da";
export const url=new URL("../icons/tram-thin.svg?v=423fcfd3649b9c44b2014e466df9ff2f28d1fee959d748342013301f054530c3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

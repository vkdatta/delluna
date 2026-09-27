export const name="mouse-simple-bold";
export const id="dl_9371cee3bafe4ce1be67";
export const url=new URL("../icons/mouse-simple-bold.svg?v=f994eb4181484dbc0d51d54c5379b43e088eb52c506ec0a23dcf33b12f5b8924",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

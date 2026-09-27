export const name="exclamation-fill";
export const id="dl_d36f1c4d875b5dfbd714";
export const url=new URL("../icons/exclamation-fill.svg?v=f880e2be70fb690339f0af777ec40b90081f54c5b3a3299fedfd8884e4eeb73b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

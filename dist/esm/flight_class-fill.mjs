export const name="flight_class-fill";
export const id="dl_1fb8f5a15c50f5b128d7";
export const url=new URL("../icons/flight_class-fill.svg?v=725bcf2fe6787666c68b6e2624b554910feec20b0a3dda2be5d2f996f0765ce3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="acupuncture";
export const id="dl_315e73250302248af63d";
export const url=new URL("../icons/acupuncture.svg?v=ac63bcf6b4b837c7ef07aa35e1689e00f21e6161c7a3d47926b6d77dea3f4cfb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

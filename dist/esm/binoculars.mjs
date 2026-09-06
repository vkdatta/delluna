export const name="binoculars";
export const id="dl_3d8a79c796d04f73a43d";
export const url=new URL("../icons/binoculars.svg?v=5e3c90ef73b1f6da803031cac04024f717a5b15f410dc843a38e8d2c58968be5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

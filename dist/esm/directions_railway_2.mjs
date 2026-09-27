export const name="directions_railway_2";
export const id="dl_e46b6d149d9149d92a8d";
export const url=new URL("../icons/directions_railway_2.svg?v=554626217ceca4a841356ba26ac1ddb84e4efb7cbf5e7193ae916e372146eaf6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

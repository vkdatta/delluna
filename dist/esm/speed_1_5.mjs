export const name="speed_1_5";
export const id="dl_156bbc0c6c147a19609d";
export const url=new URL("../icons/speed_1_5.svg?v=d6ce3aff5660103ef01239730dc6285f1def7e60bb28cb6458845c9dd70d83d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

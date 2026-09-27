export const name="nest_remote_comfort_sensor-fill";
export const id="dl_5a3ec30e8ebbab163320";
export const url=new URL("../icons/nest_remote_comfort_sensor-fill.svg?v=c9ff673fb9387af8a7182dfe14eb8da832b693cc02801d7ee89d5f4dbde0baa8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

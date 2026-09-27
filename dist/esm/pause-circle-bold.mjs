export const name="pause-circle-bold";
export const id="dl_db455caf8fce432caef1";
export const url=new URL("../icons/pause-circle-bold.svg?v=8fcbfd92e0605c39bf161d4f082a406756ba69608f456c27fb65425d287e31a7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

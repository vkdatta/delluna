export const name="water_ec";
export const id="dl_ef462daa5d7eaf671490";
export const url=new URL("../icons/water_ec.svg?v=1bba07cecf0fa7a136e5fe8a364212a28581cd61deb1d0dabde35c72b2f31569",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

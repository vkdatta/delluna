export const name="release_alert";
export const id="dl_52965fbe984eaa9b8df8";
export const url=new URL("../icons/release_alert.svg?v=aac0e4d878d7b928a1ffb3c30b9ba5c9326fdfda5cfed2de92967bc379623afd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

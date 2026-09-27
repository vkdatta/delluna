export const name="tablet_mac-fill";
export const id="dl_77228dfbaa05f675b33d";
export const url=new URL("../icons/tablet_mac-fill.svg?v=0c9c011598fa1ccb9644d2b93089c80b75be3c210a755d56c98e1fd92fa8ef1e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="ear-slash-thin";
export const id="dl_b78acb17aeca45e98ecf";
export const url=new URL("../icons/ear-slash-thin.svg?v=c977a75108a7e7581ddd315943a3921e4d09f12cc211ba59b88b556a302ee30a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

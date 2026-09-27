export const name="globe-hemisphere-west-thin";
export const id="dl_73dbd7349e404967b6cc";
export const url=new URL("../icons/globe-hemisphere-west-thin.svg?v=65a7e6c95f8153dfd167cfc9ceecc564b3851946fb1c4710143ec5f0ce2c7e87",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

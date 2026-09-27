export const name="globe-hemisphere-west-thin";
export const id="dl_73dbd7349e404967b6cc";
export const url=new URL("../icons/globe-hemisphere-west-thin.svg?v=7e0468111eb7e969eaf14f6795738e641c39ff437c8da20cf682706dd057a949",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

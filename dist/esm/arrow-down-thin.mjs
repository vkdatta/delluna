export const name="arrow-down-thin";
export const id="dl_4b90c5a56ae448089000";
export const url=new URL("../icons/arrow-down-thin.svg?v=15ef187dc1d2e24eb66817e6243b584c2a468dd8ff0fc8092d0f98011056701f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="eject-simple-thin";
export const id="dl_61806565806d40aabc8e";
export const url=new URL("../icons/eject-simple-thin.svg?v=1aec1eaae4eca9f7edd73f0beca2a7913a115fb6e2e870e9c9acb8907089e943",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

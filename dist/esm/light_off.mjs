export const name="light_off";
export const id="dl_e71ff321507c8b2c1429";
export const url=new URL("../icons/light_off.svg?v=0bc9fe9bf3ee9c8bd783ffc7df07986080300f0fb76a877ddf8bc8ff48d44ccf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

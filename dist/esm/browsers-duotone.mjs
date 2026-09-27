export const name="browsers-duotone";
export const id="dl_845eacb89a9749f9af90";
export const url=new URL("../icons/browsers-duotone.svg?v=60a0aa9421984aa30ce41af651838fd88256f00aa81852db70020f983d459361",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

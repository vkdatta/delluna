export const name="sign-in-bold";
export const id="dl_755df4144f1240c79898";
export const url=new URL("../icons/S/sign-in-bold.svg?v=daf2e688394a27ea4a69bb247072516e8b5a0f2cad2369c089398db3551f6756",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

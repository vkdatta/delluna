export const name="sim-card-thin";
export const id="dl_80f685c2766eea3c1d25";
export const url=new URL("../icons/sim-card-thin.svg?v=b44ab1d2a6ebeb543041485b2c14645bf175958ed197481d34601eb55f063668",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

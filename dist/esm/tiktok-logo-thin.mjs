export const name="tiktok-logo-thin";
export const id="dl_2364bcdaa71c5ec01402";
export const url=new URL("../icons/tiktok-logo-thin.svg?v=52900227bb860627b2c8daaa2bd652eaaba4cd171a390bdd33ae252d9ab1bc16",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

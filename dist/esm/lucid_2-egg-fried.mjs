export const name="lucid_2-egg-fried";
export const id="dl_5f42bf55c6ed45c78d85";
export const url=new URL("../icons/lucid_2-egg-fried.svg?v=2d6badee412be65248fbf7849f48cae172d49fe54c58ef6dbef0dfbce1ab4e8e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

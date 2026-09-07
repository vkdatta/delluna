export const name="battery-low-duotone";
export const id="dl_07dc271656f84b428e75";
export const url=new URL("../icons/battery-low-duotone.svg?v=e52594c88e6790a995e863fbe8e5dd1b2a9a9e395e61de274bb9c0e9ff622865",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="battery-low-duotone";
export const id="dl_07dc271656f84b428e75";
export const url=new URL("../icons/battery-low-duotone.svg?v=785da812b25b7f37bbaeffce232abab7530a0fe6b2269f5c2f00fbf2095ea706",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

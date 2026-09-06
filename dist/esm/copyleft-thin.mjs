export const name="copyleft-thin";
export const id="dl_4923619b744a45ec9967";
export const url=new URL("../icons/copyleft-thin.svg?v=d27ede65670001da774a693fb2bb2217c696a727ee3e857237d268b79b879ced",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

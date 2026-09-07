export const name="lucid_2-eye-off";
export const id="dl_7d488b9a504f4fdd82b9";
export const url=new URL("../icons/lucid_2-eye-off.svg?v=c91eb437d74b304d60fa09ab12ce5ae99f6e5080bfdfb920dc8f39b56c74b3a4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

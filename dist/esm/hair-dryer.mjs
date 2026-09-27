export const name="hair-dryer";
export const id="dl_f5b78fcc7fa84fa79617";
export const url=new URL("../icons/hair-dryer.svg?v=e660dcf09a8f408e5ec45f6ed9ea679c19224db9f4c579cf60a9c2960d20d881",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

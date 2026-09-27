export const name="recycle";
export const id="dl_4e4473a81a1742d3b4c7";
export const url=new URL("../icons/recycle.svg?v=9c16f3b734470e588678ee4f9932be1ad287f80df23e3336f4de9f309db719db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

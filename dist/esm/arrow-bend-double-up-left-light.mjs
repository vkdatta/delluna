export const name="arrow-bend-double-up-left-light";
export const id="dl_19eab26c51ff4b71ad5c";
export const url=new URL("../icons/arrow-bend-double-up-left-light.svg?v=176ca815b1fc9b34aa00675ad119f2150eb63e3ce11c081e1e2d58c55e737c07",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

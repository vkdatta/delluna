export const name="app-window-bold";
export const id="dl_d88aa8bc3fed46e89bc1";
export const url=new URL("../icons/app-window-bold.svg?v=092423dfabd0e36435da2a2ae1f10a050d242983cbf5f37f2a3c4fe930a55756",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

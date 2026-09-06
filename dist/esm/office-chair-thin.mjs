export const name="office-chair-thin";
export const id="dl_d5ed9c251b6640528bde";
export const url=new URL("../icons/office-chair-thin.svg?v=46e2b331be51f677838577a2d9dd1f9fcab0546184b08bdba9d5fdf424661d76",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

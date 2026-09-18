export const name="skeleton-fill";
export const id="dl_374eea6fbfb348a385b4";
export const url=new URL("../icons/S/skeleton-fill.svg?v=0fb36e1598f20322faf743bbc74fddbf4c85c64e47c9fa741759829c4e1511c4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

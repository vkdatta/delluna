export const name="wifi_calling";
export const id="dl_05278899d13884bc2ceb";
export const url=new URL("../icons/wifi_calling.svg?v=3d07a127d81b16e66155ed5925c708a4c2017b92064c3ab0d082c0880556a032",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

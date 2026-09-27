export const name="arrow-u-right-down-bold";
export const id="dl_a187b503962c4bf5afad";
export const url=new URL("../icons/arrow-u-right-down-bold.svg?v=d8ad55a664885c49e3dce015be73acf3ff19b56531735cefa377674aa19a4ab0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

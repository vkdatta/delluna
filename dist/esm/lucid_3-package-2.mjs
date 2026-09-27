export const name="lucid_3-package-2";
export const id="dl_85c4136aa40f4b6b8211";
export const url=new URL("../icons/lucid_3-package-2.svg?v=ca5f1f45803a822c75fb475f2c102fefc12e225cd22684bfa9cf7551a157e478",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

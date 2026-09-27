export const name="arrow-square-up-duotone";
export const id="dl_4ace8b0ea33548baabeb";
export const url=new URL("../icons/arrow-square-up-duotone.svg?v=6e2d598cce8186b1cc2e2a36296de4776589c094c91375879b468e1dc50dcbc3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

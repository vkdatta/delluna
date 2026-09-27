export const name="arrow-left-duotone";
export const id="dl_2c98246063764a729a49";
export const url=new URL("../icons/arrow-left-duotone.svg?v=c48dd8635d6ca5d0bf48db8a7bee524cc954ced848456d38ca0c3df658664313",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

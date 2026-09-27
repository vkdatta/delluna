export const name="asterisk-duotone";
export const id="dl_49457882e8de4821be23";
export const url=new URL("../icons/asterisk-duotone.svg?v=37b1b2af02332be15c1ef3bb2e4487744aaba589930dc5431659f7cfa94da78e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="brightness_6";
export const id="dl_418c467cf553eeaeb86f";
export const url=new URL("../icons/brightness_6.svg?v=d260efd96c9df04533f163055b4bcaef2c41a94bd27f484043fa97c43e282c50",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

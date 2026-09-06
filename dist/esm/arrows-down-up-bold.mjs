export const name="arrows-down-up-bold";
export const id="dl_52096dbe5e574f49b953";
export const url=new URL("../icons/arrows-down-up-bold.svg?v=174464c54af7273e46a6fc204ebd0fc1da75906573880687836b314e3fbdb85e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

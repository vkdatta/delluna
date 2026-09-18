export const name="money_bag-fill";
export const id="dl_96ae00c09be24021827a";
export const url=new URL("../icons/money_bag-fill.svg?v=1a0b05257ae85050edf189e810ac967504c52b15d63f20ba77c0beafea7a2f53",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

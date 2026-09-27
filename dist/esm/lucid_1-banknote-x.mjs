export const name="lucid_1-banknote-x";
export const id="dl_be0e4f0492ad4ed9b6f4";
export const url=new URL("../icons/lucid_1-banknote-x.svg?v=7f599d060901178b79e5b8b02cfef1c3f5ba7ea398956ad314deb058931a7d87",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

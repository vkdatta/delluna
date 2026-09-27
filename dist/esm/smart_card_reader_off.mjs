export const name="smart_card_reader_off";
export const id="dl_f0ca56daa58dd9ebf380";
export const url=new URL("../icons/smart_card_reader_off.svg?v=8200250be919b9fb9ee4821fdf7b25e60bfe248bf88c45044d46ed735ede146e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

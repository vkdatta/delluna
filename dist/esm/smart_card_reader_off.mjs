export const name="smart_card_reader_off";
export const id="dl_0eec6a5ea89846c9acf4";
export const url=new URL("../icons/S/smart_card_reader_off.svg?v=76b1fb0ac971b5db6ab95dd011e74b564bb0a38503837c4952a13bae244bdbb3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

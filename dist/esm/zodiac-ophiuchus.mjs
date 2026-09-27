export const name="zodiac-ophiuchus";
export const id="dl_d77513d028d24757bafa";
export const url=new URL("../icons/zodiac-ophiuchus.svg?v=e1c222398592d1b2baac03c3144685301efe2462c2025ffaa27783a6668c832d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

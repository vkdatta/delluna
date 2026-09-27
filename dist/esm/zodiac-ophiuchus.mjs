export const name="zodiac-ophiuchus";
export const id="dl_d77513d028d24757bafa";
export const url=new URL("../icons/zodiac-ophiuchus.svg?v=b51cd2bd004ab4c14bcb0bfe7f1170273b2e297f178da1d877674bf6420ed014",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

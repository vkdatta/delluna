export const name="sports_tennis";
export const id="dl_5b0735662b274a57a0c9";
export const url=new URL("../icons/S/sports_tennis.svg?v=2c2bf8bef52b4c739c6ea80813f1c2067e3092750914e55e0e455010464e421f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

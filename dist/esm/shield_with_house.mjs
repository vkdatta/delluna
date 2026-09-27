export const name="shield_with_house";
export const id="dl_1f3677fed697128c6606";
export const url=new URL("../icons/shield_with_house.svg?v=e02981565dbc348ee7a16fdbb62c0ff93ace81ef82c811258d4b05136628c647",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

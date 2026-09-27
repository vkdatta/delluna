export const name="emergency_home-fill";
export const id="dl_2eea32c5f15280b7318b";
export const url=new URL("../icons/emergency_home-fill.svg?v=8763aa29873b4ee83dd2540462fe14dc84468395b16cfd754d5b4e640cdc6eb7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

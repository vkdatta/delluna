export const name="family_history";
export const id="dl_218dc20591183892abc2";
export const url=new URL("../icons/family_history.svg?v=d4167358135d583b6969ba650e0cc820008b83f1a815fa484a7fb215a547ee03",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

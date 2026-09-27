export const name="person_cancel-fill";
export const id="dl_80211714e24ed0733093";
export const url=new URL("../icons/person_cancel-fill.svg?v=41bf6f1d46021751ce6af78b03164fba77abf84cc3bb766f16d08fd2d0966510",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

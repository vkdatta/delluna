export const name="contactless_off-fill";
export const id="dl_c5b588d0de63a73e7c45";
export const url=new URL("../icons/contactless_off-fill.svg?v=792bdd9fdce621296bd083310dd031e62d20286681e2ce5e98b657bf1fd70b72",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

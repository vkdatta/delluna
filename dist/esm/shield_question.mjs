export const name="shield_question";
export const id="dl_4e4c9e6dae8a440b92bc";
export const url=new URL("../icons/shield_question.svg?v=5835188c0a3713c194169330c22a9288019909f828ec82375c6641b7a078b5e5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

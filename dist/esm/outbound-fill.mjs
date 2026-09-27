export const name="outbound-fill";
export const id="dl_59d549355b413ce1cfdb";
export const url=new URL("../icons/outbound-fill.svg?v=59d7273d2152e4b1fa3fcd5b3437e78b35ee23233bbcebcad50e16143784f6ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

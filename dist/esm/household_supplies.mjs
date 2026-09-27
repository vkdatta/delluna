export const name="household_supplies";
export const id="dl_0494860000ba248b2097";
export const url=new URL("../icons/household_supplies.svg?v=5fc7b54b929f8816b59f4b030ef620179305c6222ca309acbabe5923d612c6d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

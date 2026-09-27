export const name="crane";
export const id="dl_7429544e546a4ef79e47";
export const url=new URL("../icons/crane.svg?v=799158b2f9fa5f44d7394ce847c86c983fd0673ef078491f4678d2a5f8dcf491",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

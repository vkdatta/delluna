export const name="award_star";
export const id="dl_32b7a273f712b4c38388";
export const url=new URL("../icons/award_star.svg?v=8e601ca78ea1472f2da3ea1129ec23fc2bcaf244fd7051f4acb99252a1dde5fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="circles";
export const id="dl_f791a8d6420ce46227f6";
export const url=new URL("../icons/circles.svg?v=35e216a14f1ea4e90a7720df70a893f05e1e542578392d38fa84252c787b96e4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

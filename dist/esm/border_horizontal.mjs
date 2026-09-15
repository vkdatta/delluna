export const name="border_horizontal";
export const id="dl_463c677ec176474abdfb";
export const url=new URL("../icons/B/border_horizontal.svg?v=024a04a09bb7a52bd300984647ae78b762ded947530429f91d6f9c82061c83c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

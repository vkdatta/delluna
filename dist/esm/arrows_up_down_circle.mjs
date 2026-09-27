export const name="arrows_up_down_circle";
export const id="dl_a204cf1929b535943800";
export const url=new URL("../icons/arrows_up_down_circle.svg?v=ec3fd710768e3e6469f809ab4ffc43cc85038105b12d84e54bf540694e885eae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

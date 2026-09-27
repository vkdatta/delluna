export const name="paperclip-light";
export const id="dl_96cea20b1a5c4bc3b340";
export const url=new URL("../icons/paperclip-light.svg?v=847532b2692066f2573412e8cf592fc64bdf6569b074776dfb51e106b7aa3126",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

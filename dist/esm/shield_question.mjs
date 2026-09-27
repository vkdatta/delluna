export const name="shield_question";
export const id="dl_ee7e93da17f710f255b1";
export const url=new URL("../icons/shield_question.svg?v=bb0240ad20b7a9413ac9eaeaae46b20313dae7275b5a4c6976e64abffdd8749d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

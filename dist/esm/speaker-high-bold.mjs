export const name="speaker-high-bold";
export const id="dl_3f97faf134548d7a42ff";
export const url=new URL("../icons/speaker-high-bold.svg?v=36a55dda5ec30c0984fba15fc63fcb2025277293286f6e68d592cff86f20f592",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

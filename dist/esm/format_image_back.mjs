export const name="format_image_back";
export const id="dl_aa5d86d0ae214406d4f3";
export const url=new URL("../icons/format_image_back.svg?v=4ac0ce89225d532bdfae0b8b6a9ce446906c65b9635bf62b94f3bca261c2ca97",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

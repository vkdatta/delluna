export const name="language_us_dvorak-fill";
export const id="dl_917023e6841045da9e8c";
export const url=new URL("../icons/language_us_dvorak-fill.svg?v=1bab09c92e601cbd4467a44e3759b7fbdad40c9f977e45b6e79bb64f19999346",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

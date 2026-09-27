export const name="brandy-duotone";
export const id="dl_1f92b49bafc2445daf4e";
export const url=new URL("../icons/brandy-duotone.svg?v=e3a9a086a15e37be447895ac600f20ab35619a9d5fab2b4a1240a80ffded7856",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

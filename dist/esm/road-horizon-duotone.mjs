export const name="road-horizon-duotone";
export const id="dl_ab477c3d8ac8415e93ab";
export const url=new URL("../icons/road-horizon-duotone.svg?v=99bb9039fa052d743d80b44e61c2242e9f46511151741ee60e70310a252c10c9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

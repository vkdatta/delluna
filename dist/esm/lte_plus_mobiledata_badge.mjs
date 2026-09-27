export const name="lte_plus_mobiledata_badge";
export const id="dl_a5f1ad9c0a09946f75e0";
export const url=new URL("../icons/lte_plus_mobiledata_badge.svg?v=f663688264466b4e889f28c869f06848ecf9f193dc87a87d7f89ec14fee98ecc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

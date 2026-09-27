export const name="lucid_3-repeat-off";
export const id="dl_9b8040742aef4a5c8591";
export const url=new URL("../icons/lucid_3-repeat-off.svg?v=e055bfbae63925fa792743342af10a0c1b026a83d08968f649ac4712e3150880",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

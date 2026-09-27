export const name="supervised_user_circle_off-fill";
export const id="dl_a18b4f5cc811bfc5dacd";
export const url=new URL("../icons/supervised_user_circle_off-fill.svg?v=13e8ac36a318a106fb0fc1b6ec1c9726d6b2cc09a02b215387c777813aef6409",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

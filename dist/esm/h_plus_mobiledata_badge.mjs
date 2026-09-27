export const name="h_plus_mobiledata_badge";
export const id="dl_dd3b8c58849265fa1ce0";
export const url=new URL("../icons/h_plus_mobiledata_badge.svg?v=d057e904e74f32d4a0ba5c94cf66e7cced12d5de5a38d808d0073c824c25b062",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

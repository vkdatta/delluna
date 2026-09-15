export const name="checked_bag_question";
export const id="dl_f8057037ded44927b227";
export const url=new URL("../icons/C/checked_bag_question.svg?v=b9ea10037c43893da93f9ce0ae832dc5cf453e38e9393b32f03570ac03a1d444",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="content_paste_search-fill";
export const id="dl_408c6dceb71644bf90a3";
export const url=new URL("../icons/content_paste_search-fill.svg?v=a7cb4deac6aae75c991f0b000ffc6ec1f8183755aa1059e349059fff054bd840",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

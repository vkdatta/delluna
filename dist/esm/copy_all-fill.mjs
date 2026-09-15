export const name="copy_all-fill";
export const id="dl_ea749c30fa24429d9a9e";
export const url=new URL("../icons/C/copy_all-fill.svg?v=3411560745af9b6e56aacf199199256843593a1ac1a8f629f877829f669a4640",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="copy_all-fill";
export const id="dl_01d9de9aeebb130187b3";
export const url=new URL("../icons/copy_all-fill.svg?v=3411560745af9b6e56aacf199199256843593a1ac1a8f629f877829f669a4640",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

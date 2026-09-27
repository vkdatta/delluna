export const name="paperclip-fill";
export const id="dl_11a9833df35e4ed59c62";
export const url=new URL("../icons/paperclip-fill.svg?v=b904983304db02741ca8e61c72e34b3892978ab69e8c9c7ce20f9d844c98015f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

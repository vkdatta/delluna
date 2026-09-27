export const name="tabs-thin";
export const id="dl_b6a2e41669613846658c";
export const url=new URL("../icons/tabs-thin.svg?v=e099b962087cbafcfb1d6701c4a010be96502dc2807c497960fdda42af89ffab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

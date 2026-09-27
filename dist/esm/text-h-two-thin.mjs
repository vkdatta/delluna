export const name="text-h-two-thin";
export const id="dl_efe26493c0796d19cbae";
export const url=new URL("../icons/text-h-two-thin.svg?v=541e63a3e0923d8cb1861545e467a70d089824d3e354664e3ab36f09bd50cefb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="lucid_1-circle-chevron-left";
export const id="dl_7b84c9ee66c342c5a257";
export const url=new URL("../icons/lucid_1-circle-chevron-left.svg?v=920e1d14933dcf737b638d2cb7af18340494b47717a3b38226fc617ee2116c86",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

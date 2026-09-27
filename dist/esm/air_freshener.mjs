export const name="air_freshener";
export const id="dl_1da1ca0610f7113565cc";
export const url=new URL("../icons/air_freshener.svg?v=5eb052a595dd0c5a93f395355be491ab1d794ad432df9111691da11b3b2f8e3c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

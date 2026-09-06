export const name="lucid_3-shield-keyhole";
export const id="dl_1b13002b8b984924a3ba";
export const url=new URL("../icons/lucid_3-shield-keyhole.svg?v=b5d5ede4622cab4bb11ac35e4241eb54cdd1526cf30f03aefaa2e27a741f576d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

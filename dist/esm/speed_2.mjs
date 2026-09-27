export const name="speed_2";
export const id="dl_75ef9b890bb232105600";
export const url=new URL("../icons/speed_2.svg?v=64c2e2bfbef4a5bc8145d2a064f8ddbdff9ce6fac7fd682fd819b565f9288eea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

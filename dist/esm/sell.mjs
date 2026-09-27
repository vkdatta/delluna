export const name="sell";
export const id="dl_9197832d28232f234a83";
export const url=new URL("../icons/sell.svg?v=1920b55499758b6fb05d6d96462518b444bb4b575b83d4e45578d53751517ef2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

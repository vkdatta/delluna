export const name="tea-bag-bold";
export const id="dl_0c8adf218fda67a6c3b0";
export const url=new URL("../icons/tea-bag-bold.svg?v=a57f49f0dfd7b52162af96a0cd20fa9fd32eca3cec2e0fb0a6a73468bbcb3dd5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

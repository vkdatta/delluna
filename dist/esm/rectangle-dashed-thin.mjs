export const name="rectangle-dashed-thin";
export const id="dl_5327b65bfe2c4c47a4d5";
export const url=new URL("../icons/rectangle-dashed-thin.svg?v=1ef8a162ca1c7bc6baf7cf6289caf5a37b4008eb0226a23209f75172bc20f60d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

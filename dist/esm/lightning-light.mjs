export const name="lightning-light";
export const id="dl_3a7092f378a24289952a";
export const url=new URL("../icons/lightning-light.svg?v=3b79121c01c7b44c088612a4cc8a8f592fcb83180fd905c85c28139bf4085c9b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

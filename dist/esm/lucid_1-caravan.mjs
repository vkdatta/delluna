export const name="lucid_1-caravan";
export const id="dl_a53fe46f25ea4e6fb0df";
export const url=new URL("../icons/lucid_1-caravan.svg?v=d32e7990be746f57fc87871df8f87823eaedd6ca70d03f6aa21e1f811dcc822f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="lucid_3-message-square-quote";
export const id="dl_8a5eda9b0ccf45feb4db";
export const url=new URL("../icons/lucid_3-message-square-quote.svg?v=aa9d4b278e831f87a8ddb3771b8aa300c601607062a6534f0a3658f494543f19",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

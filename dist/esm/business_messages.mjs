export const name="business_messages";
export const id="dl_948640025239ebffef5d";
export const url=new URL("../icons/business_messages.svg?v=c0d97bb7c195d4bc3f8c8d5779ac9f2c9f83e2abbfc41c945791b3a6e1cf9982",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

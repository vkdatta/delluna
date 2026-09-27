export const name="asterisk-fill";
export const id="dl_b81aa24e9049487fa2fb";
export const url=new URL("../icons/asterisk-fill.svg?v=f6799da8a66094d08ec291feff97b18a18046f9d737990ff39fef90ff5dad32c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="dot-outline-light";
export const id="dl_84db8e1ee157462486ea";
export const url=new URL("../icons/dot-outline-light.svg?v=9cffea332fd719455a57b80c4f04c8a616bb3cc27155f5c9efb3ec738b9ed7ae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

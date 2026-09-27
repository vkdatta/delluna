export const name="lucid_1-bed-single";
export const id="dl_4bcc2446ca83443bab7d";
export const url=new URL("../icons/lucid_1-bed-single.svg?v=ebf6763eb54ce7d873148fd1070743cea552ca0670fbc06be54ac01b1c270937",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

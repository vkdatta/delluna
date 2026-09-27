export const name="mobile_text";
export const id="dl_6bd90d020e2cfb89fa66";
export const url=new URL("../icons/mobile_text.svg?v=5f20d38456f64b7cacbaed239a86cda610b439752bcc2e9a6660bd438ffd5ff7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="contact_emergency";
export const id="dl_a676ecb6657384f27379";
export const url=new URL("../icons/contact_emergency.svg?v=92edad86af524a575984c82363cd7f9cf54c29984a7368fab3ccfbea859cf286",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="trolley";
export const id="dl_e10ce4ae64d3768489da";
export const url=new URL("../icons/trolley.svg?v=9a09b8e220a4b82a8c1c5d49557b78bcc55500fb794226a94d4db055c065fb18",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

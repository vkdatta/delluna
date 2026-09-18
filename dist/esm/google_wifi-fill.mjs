export const name="google_wifi-fill";
export const id="dl_0ff752a813514d63802b";
export const url=new URL("../icons/G/google_wifi-fill.svg?v=7d71daa255496186439739aad40cda83ccb29e4dc0197e0ec943460c23ba8e77",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

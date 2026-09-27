export const name="ar_on_you";
export const id="dl_ed5dee56358c409a69d4";
export const url=new URL("../icons/ar_on_you.svg?v=50d86bfe3b2a5fc4d02939242a2fbaf61a1d607164509e9f3bf9c2a9b246acea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

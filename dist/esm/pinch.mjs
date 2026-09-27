export const name="pinch";
export const id="dl_9c1fcccd7515c848e559";
export const url=new URL("../icons/pinch.svg?v=f4cbe3615403d78e24d97f76868332b43f226320e0d5d05273f9e39675054424",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

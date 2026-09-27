export const name="lucid_2-gallery-vertical-end";
export const id="dl_f5c16e9647e04d8f855d";
export const url=new URL("../icons/lucid_2-gallery-vertical-end.svg?v=d59d1c424b546fdd52fd2a4f3cb83c3886eaa27ef79e5cf3b56ea9222181c1ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

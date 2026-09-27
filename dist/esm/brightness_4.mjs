export const name="brightness_4";
export const id="dl_33248dfa711661b58420";
export const url=new URL("../icons/brightness_4.svg?v=4af105ef6e87e6437aa0cfa2e9c16b5de835a6638880a37c23776b7c94841332",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

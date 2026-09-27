export const name="lucid_1-antenna";
export const id="dl_8fad1ea3a28d43f4a605";
export const url=new URL("../icons/lucid_1-antenna.svg?v=1c77a214b4d99438afaecd2148d006c61eeab4dd49d0eec661bb2e106534c668",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

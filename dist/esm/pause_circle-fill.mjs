export const name="pause_circle-fill";
export const id="dl_bbee5d0b121f5c1213f7";
export const url=new URL("../icons/pause_circle-fill.svg?v=f37c6a56a094ddd265180147738efb80fb24b3823d960ed7a9f611ad482c7071",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

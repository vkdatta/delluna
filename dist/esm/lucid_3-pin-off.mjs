export const name="lucid_3-pin-off";
export const id="dl_ad44dc7db6eb48bd99e4";
export const url=new URL("../icons/lucid_3-pin-off.svg?v=d5ce91af40792d76e4d24af9e0d9f3be6bfbf0a08a3e4731e7d9038674c5dee3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

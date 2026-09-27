export const name="lucid_1-circle-parking";
export const id="dl_fa4d6847f9b84cf7a36f";
export const url=new URL("../icons/lucid_1-circle-parking.svg?v=0cab7a768f8d11c03fb7a660d7e1ce50eac12968e934bd62b690e493d48bdb1c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

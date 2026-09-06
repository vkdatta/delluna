export const name="grains-slash-fill";
export const id="dl_6edd05994a6c477bb6bd";
export const url=new URL("../icons/grains-slash-fill.svg?v=b7bf2a757db686a675f679264c299b56f118cee5871708b28f98d3d15ecba3ee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

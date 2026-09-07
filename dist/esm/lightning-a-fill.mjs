export const name="lightning-a-fill";
export const id="dl_919bde2ab54f4548be30";
export const url=new URL("../icons/lightning-a-fill.svg?v=9cd6e39b1da11f1204a3fe117ecb8d15bef4a20580d81a2efcc4c59d316669c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

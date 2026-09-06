export const name="gps-slash-bold";
export const id="dl_92a20f66b71d4f6eb105";
export const url=new URL("../icons/gps-slash-bold.svg?v=d2fd723fcbc761c294fe8d632dc99454c190b2a525766e0200f140de431fc29f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

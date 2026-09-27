export const name="spinner-ball-fill";
export const id="dl_9b4c6e54970abe0548a3";
export const url=new URL("../icons/spinner-ball-fill.svg?v=9e9acc10af43640a62e6b8384fb4c75e1e7d26778610ba94c29e84837cc2be78",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="microwave_gen";
export const id="dl_ba256f67ab7140ef8403";
export const url=new URL("../icons/M/microwave_gen.svg?v=abf4e42792a56a5298d094cd63731ec25a3bdb9d7241b465958b0b4e5f0dc93e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

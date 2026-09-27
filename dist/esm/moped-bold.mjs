export const name="moped-bold";
export const id="dl_e796528995a340ec856a";
export const url=new URL("../icons/moped-bold.svg?v=cddbec9d5cf372633ff073645602add590cc24ed0e4374ce0b02bee46d815b85",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

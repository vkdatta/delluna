export const name="local_florist";
export const id="dl_c71605d20b51ae71a675";
export const url=new URL("../icons/local_florist.svg?v=6d16d4b5f791f32df5d879f868520f11ccb33a14e68e1236e2472210831360d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

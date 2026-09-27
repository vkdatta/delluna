export const name="electric_bolt-fill";
export const id="dl_ac6b1a56aabec371c105";
export const url=new URL("../icons/electric_bolt-fill.svg?v=7694d5756fa00013e00f1d19214d5ce48f28d6e8586d2ee06389904f21ae908b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

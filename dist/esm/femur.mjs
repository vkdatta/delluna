export const name="femur";
export const id="dl_a8bde5dd3c0defed6650";
export const url=new URL("../icons/femur.svg?v=3a1c6b1591e6ca11635e24e5aad7c2e0d4dbc3aee4a6d92e6e8cbef6f4235e7a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

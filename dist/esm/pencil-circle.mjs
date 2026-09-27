export const name="pencil-circle";
export const id="dl_08b9d2f0ecb34faa9ff4";
export const url=new URL("../icons/pencil-circle.svg?v=5435c60b986e3f28951d624ddad681d6e45531290196cc0438548e2ddda1ff26",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

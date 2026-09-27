export const name="number-square-five-fill";
export const id="dl_14f37b372949488b90bc";
export const url=new URL("../icons/number-square-five-fill.svg?v=7a3eeea13b17894bfb5e4ea05f5ff8f3994c46322b87f19e2e0202876637f048",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

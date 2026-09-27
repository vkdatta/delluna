export const name="vignette";
export const id="dl_59198d0d34469eb082f4";
export const url=new URL("../icons/vignette.svg?v=5f070bd3fba30884440e262065cc35e0de2bf4f406849d6fa3a0357af23b80a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

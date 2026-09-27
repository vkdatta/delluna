export const name="quick_reference_all-fill";
export const id="dl_57e4d454223c3b2b99bb";
export const url=new URL("../icons/quick_reference_all-fill.svg?v=63c0587b8c69df4ef12beeabc6d8ffb5dc56f176df3d80fc504f3bd48c2b5371",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

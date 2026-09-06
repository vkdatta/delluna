export const name="member-of";
export const id="dl_994ca90cca4b4a1cac2e";
export const url=new URL("../icons/member-of.svg?v=8e5c7cb3eb571b2de299d13b618fd3fe2232b89c6cfca420a30f8a58fe91e0d5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

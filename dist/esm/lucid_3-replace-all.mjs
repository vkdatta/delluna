export const name="lucid_3-replace-all";
export const id="dl_679ad55e35ba436a9015";
export const url=new URL("../icons/lucid_3-replace-all.svg?v=7e55235ce6f2786ae1e6f8f7a71ad28fd557cff4912e5b47d4a40f528208c0d6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

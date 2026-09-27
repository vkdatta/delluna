export const name="contact_support";
export const id="dl_4cb93808214445ae857d";
export const url=new URL("../icons/contact_support.svg?v=06afea7a1a51d6787c282eccb5ae25d670b61b1bedc9e0c18043598f727b80db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

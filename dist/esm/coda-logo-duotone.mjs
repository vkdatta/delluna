export const name="coda-logo-duotone";
export const id="dl_472e68a24cdd40f195ca";
export const url=new URL("../icons/coda-logo-duotone.svg?v=d7a2a8fbaa799f8cf100b65078c42dd3c6ce68f477b24dda48774fe15b0d272e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

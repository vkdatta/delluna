export const name="paper-plane-right-duotone";
export const id="dl_96a99dfb9b0749f6b773";
export const url=new URL("../icons/paper-plane-right-duotone.svg?v=7da48dbb4cf9358d73b6dbf2f81afef171e1674983755490071b15ac4d487662",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

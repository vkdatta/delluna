export const name="link-duotone";
export const id="dl_a37b16cb97e74f03adee";
export const url=new URL("../icons/link-duotone.svg?v=1bd36b9f8e749f6dfb3a0e432c995bbbf38e2b632294185ee939aa87ce779128",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

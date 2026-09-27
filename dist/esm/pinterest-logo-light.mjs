export const name="pinterest-logo-light";
export const id="dl_19f650e4307a40d0a2ef";
export const url=new URL("../icons/pinterest-logo-light.svg?v=fa08f2a57dccaca359df14820ab49ae8ef55b4e1755896e6d67cd7fa35734c78",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

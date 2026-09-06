export const name="notepad-duotone";
export const id="dl_42282d6a4cf84a88a54c";
export const url=new URL("../icons/notepad-duotone.svg?v=4e7e04f96069f3f3fca5a2967ffdaad8db459972d3328b0ca2e783772e64cda1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

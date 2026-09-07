export const name="terminal-light";
export const id="dl_5223eeede8cd47659c56";
export const url=new URL("../icons/T/terminal-light.svg?v=e08bb949c665bc46dde68183733a19ac1c2561fc84bb90922d6d8ecc5432648f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

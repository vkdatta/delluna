export const name="printer-thin";
export const id="dl_b1959d30d5ac45bb9548";
export const url=new URL("../icons/printer-thin.svg?v=4af0ba34313716149dd8f05342675fa367e346987be468da67c7da97724f9dc0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

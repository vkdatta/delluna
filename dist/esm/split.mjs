export const name="split";
export const id="dl_43ad1f214a3e40388a4c";
export const url=new URL("../icons/split.svg?v=092adcb6259ac1464c405d1b97dac80bb66e9ab5b09f0279bcfe3b336b51b036",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

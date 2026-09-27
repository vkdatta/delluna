export const name="mailbox-light";
export const id="dl_232935cf031a458998a5";
export const url=new URL("../icons/mailbox-light.svg?v=fe0f46be16f2b51b9a259c23d3b22b98fb054a7a7bec0b2c0e244fa658a3a39f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

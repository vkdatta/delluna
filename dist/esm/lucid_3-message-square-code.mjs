export const name="lucid_3-message-square-code";
export const id="dl_6892ff6163fa4086aaee";
export const url=new URL("../icons/lucid_3-message-square-code.svg?v=f4cd653ba66aa9caefa5cf7f3d34272a1a7cb231c8cf5832333ea1a72fd399dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="lucid_3-server-plus";
export const id="dl_c9b130d490584801b158";
export const url=new URL("../icons/lucid_3-server-plus.svg?v=1db5a61bcee97f450d5c126cea1bcdd4f2e9a6faca8d1150bd4517b4591999d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

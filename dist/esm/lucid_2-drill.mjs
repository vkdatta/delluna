export const name="lucid_2-drill";
export const id="dl_b8f5d7f60e3e46458c6c";
export const url=new URL("../icons/lucid_2-drill.svg?v=b3a4e3cb88f73a00ee3c4a3cfcf73812884ec5a85eb6b058062d0f09a4d1be3a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="lucid_2-mail-check";
export const id="dl_038743ab46e84dcdae38";
export const url=new URL("../icons/lucid_2-mail-check.svg?v=921062894d39103e93abdc3ca4e6ff4421f3d6968833f89f6057f77999d6243b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

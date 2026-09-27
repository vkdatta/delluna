export const name="no_crash";
export const id="dl_b94d121aba3a5766129c";
export const url=new URL("../icons/no_crash.svg?v=eae4541eb99ed58c0b406f1e78d54c9b5f5704da75deb5783e3338730b4d4f9d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

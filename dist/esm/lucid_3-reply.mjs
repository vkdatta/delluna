export const name="lucid_3-reply";
export const id="dl_6cba9f3fcb06416b95e6";
export const url=new URL("../icons/lucid_3-reply.svg?v=93debdf44a8913db640f3aa4319b49278692451591f2424e9035a240c9e4b774",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="lucid_3-pc-case";
export const id="dl_02205d379228480881d1";
export const url=new URL("../icons/lucid_3-pc-case.svg?v=4b3790a2b2b624f76574db75f434ba51c7deff7f18d2e9d809c543e86088463f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="lucid_1-badge-japanese-yen";
export const id="dl_91276232931448d893c2";
export const url=new URL("../icons/lucid_1-badge-japanese-yen.svg?v=2fb03514ffe178735d0ac90b152a460b2876f1a659ba8c2b5be1eaea3e2be34c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

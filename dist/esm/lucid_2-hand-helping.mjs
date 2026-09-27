export const name="lucid_2-hand-helping";
export const id="dl_8f63b8600ada4d209218";
export const url=new URL("../icons/lucid_2-hand-helping.svg?v=522f86164d809cb9f699458213765e9e05f5482f8612357d673c6ee476bec6de",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

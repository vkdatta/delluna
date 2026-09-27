export const name="lucid_3-router";
export const id="dl_e31df08499634d6ca69b";
export const url=new URL("../icons/lucid_3-router.svg?v=8bda90976c9710f2425d2b3decfbfcecb483a8212d7f557245c87e044b90199b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

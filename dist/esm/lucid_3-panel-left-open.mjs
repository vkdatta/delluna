export const name="lucid_3-panel-left-open";
export const id="dl_74e3a13a1eba46e78e2f";
export const url=new URL("../icons/lucid_3-panel-left-open.svg?v=ba7950f0265bfd4e18b01940b0dc53677315c2c197f92fa864d31a544ea2b6e5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

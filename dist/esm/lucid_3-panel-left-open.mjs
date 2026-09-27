export const name="lucid_3-panel-left-open";
export const id="dl_74e3a13a1eba46e78e2f";
export const url=new URL("../icons/lucid_3-panel-left-open.svg?v=41bb322b61afcdfacbf4b37ee37f24bafae9d73b68de21297941e1ca729eee0c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

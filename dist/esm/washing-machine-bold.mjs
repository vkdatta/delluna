export const name="washing-machine-bold";
export const id="dl_f490b6ad185411151d3f";
export const url=new URL("../icons/washing-machine-bold.svg?v=899c4f6c9bf05f1e7a4d16874b1bba29946487cf5d01ff7bc419837ee0df03bc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

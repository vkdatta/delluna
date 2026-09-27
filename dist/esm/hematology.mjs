export const name="hematology";
export const id="dl_c411d4b94b1e2d7f3bbd";
export const url=new URL("../icons/hematology.svg?v=0abe9fad000e6b0d156a16eec5f8682add5419f6d5805e24d320716bf4e24b78",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

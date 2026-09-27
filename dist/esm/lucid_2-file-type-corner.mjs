export const name="lucid_2-file-type-corner";
export const id="dl_a8df6f0219fe4f6f85c6";
export const url=new URL("../icons/lucid_2-file-type-corner.svg?v=ea455ecd22a4f89de015a0094a2b656b43af363700ee1b0d4e490e6d51eb227f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

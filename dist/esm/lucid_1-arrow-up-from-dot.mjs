export const name="lucid_1-arrow-up-from-dot";
export const id="dl_02f1dafef01e44359a52";
export const url=new URL("../icons/lucid_1-arrow-up-from-dot.svg?v=c20c1008ffd191241b1f7ef90aa509f2df9c706c005a34795f77b74b28103a0c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

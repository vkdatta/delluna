export const name="lucid_3-shield-question-mark";
export const id="dl_e8d66761ce6a40fe8a4e";
export const url=new URL("../icons/lucid_3-shield-question-mark.svg?v=f0392ec4c2cec6a536979c6bb08156e2b360756dcfd82294cb6a81585f1418b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

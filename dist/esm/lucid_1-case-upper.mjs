export const name="lucid_1-case-upper";
export const id="dl_2c07a38fb8db4d98912c";
export const url=new URL("../icons/lucid_1-case-upper.svg?v=eb723a565d4da9410d45be1b2facedd7a24bca7277dbaf2c2ec75b17f5136c79",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

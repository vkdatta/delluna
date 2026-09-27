export const name="lucid_3-notebook-text";
export const id="dl_eacf20dbbb4349d9b904";
export const url=new URL("../icons/lucid_3-notebook-text.svg?v=f5f0de3297c52f9464aa1d852f2c5deffc3a1229aeb684257d9d6d91099b3f79",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

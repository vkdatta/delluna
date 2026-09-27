export const name="lucid_3-repeat-2";
export const id="dl_a02f61487c534e409d50";
export const url=new URL("../icons/lucid_3-repeat-2.svg?v=c455d0dace2c02fbc17fc6dfef14496dd3ec606c6f428d4e7aa68fbbbc36a5f9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="lucid_2-hand";
export const id="dl_d8786d434bfb44738eea";
export const url=new URL("../icons/lucid_2-hand.svg?v=9aad0de64908e806eebdb1a49ce007f8e6b7c222c799d92065bdb2f13c72e01f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

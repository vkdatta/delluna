export const name="gas-pump-bold";
export const id="dl_d0abbf09bc2b42ae8fea";
export const url=new URL("../icons/gas-pump-bold.svg?v=28b8a723ab740b7ba16561fc1bbdb6b8c7a635e75085b5d85336552a98167c0c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

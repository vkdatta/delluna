export const name="lucid_2-face-angry";
export const id="dl_05b37c58c8db4aebbe2c";
export const url=new URL("../icons/lucid_2-face-angry.svg?v=0703e0856088d390fc63404de86abee0ad917cef822326ed3867ba985b2fe2bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

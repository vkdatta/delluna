export const name="lucid_1-badge-alert";
export const id="dl_6b6d787a3b584258bc4e";
export const url=new URL("../icons/lucid_1-badge-alert.svg?v=a098d341c91bf25716b40fc64fa3a4bd9ace21c3946db6267872d87de2f61e79",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

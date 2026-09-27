export const name="lucid_2-file-badge";
export const id="dl_995c05dc21a94d5bb594";
export const url=new URL("../icons/lucid_2-file-badge.svg?v=7ebfc8bfd52c4774d3ab7dc106c10e574244f9e6c93f3fc5058d7d2956ce0535",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

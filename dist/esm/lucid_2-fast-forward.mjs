export const name="lucid_2-fast-forward";
export const id="dl_7cb07f4ee85147dbbb89";
export const url=new URL("../icons/lucid_2-fast-forward.svg?v=455a75cbbd5e7f0265862b21d48383ecdfb9ee5176b8c3fb843bf7527b928134",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

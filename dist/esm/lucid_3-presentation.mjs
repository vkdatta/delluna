export const name="lucid_3-presentation";
export const id="dl_f90f2b482c964f8cadd2";
export const url=new URL("../icons/lucid_3-presentation.svg?v=8b39b828678914500db399a18e75e8c78a91ab465d437a55275940e064a0697e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="lucid_2-file-text";
export const id="dl_fce542604fc943e28ead";
export const url=new URL("../icons/lucid_2-file-text.svg?v=79a250862b0ae481c728ada1082b0c4b843370aea880b50c801ad66a6215b9bc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

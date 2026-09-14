export const name="add_comment";
export const id="dl_58ed5742c4c848f5b388";
export const url=new URL("../icons/A/add_comment.svg?v=fee43d51fae873c9209b95ef3b7cc538768873596a0a63b715ecc93c05983705",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

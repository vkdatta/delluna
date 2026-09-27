export const name="nest_true_radiant-fill";
export const id="dl_bf603d4428a83d0b9035";
export const url=new URL("../icons/nest_true_radiant-fill.svg?v=c8e859baecedd1c11d5d42a16e55f8fd445291088863351a0d6255c592c50ed9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

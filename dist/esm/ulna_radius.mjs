export const name="ulna_radius";
export const id="dl_f3211de42693e30b36ca";
export const url=new URL("../icons/ulna_radius.svg?v=29b013c16b428a13d001585ddca20ade9815250bcf8e3797de8e09e97198c629",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

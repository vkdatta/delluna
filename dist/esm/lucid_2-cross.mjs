export const name="lucid_2-cross";
export const id="dl_b4beae219421476e9c6a";
export const url=new URL("../icons/lucid_2-cross.svg?v=dc1ff14b8eb1d4f634aebcd68cb1060781c064b19238bfa7aa6d7dd391346d1e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="user-plus-fill";
export const id="dl_c08d6ef2312b9d8759f8";
export const url=new URL("../icons/user-plus-fill.svg?v=07fe0181040b8dd7956f8067f13f83d81ec395d54b1760392a5daf5692232652",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

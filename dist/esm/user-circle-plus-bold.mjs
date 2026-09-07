export const name="user-circle-plus-bold";
export const id="dl_7d9e72f36a804e17b507";
export const url=new URL("../icons/U/user-circle-plus-bold.svg?v=5dd3ed871c2697a80335937260766f9b6a18965ebaa4888d6e0b24953207fe2f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="user_attributes";
export const id="dl_f26c156e89f8bec60cc6";
export const url=new URL("../icons/user_attributes.svg?v=8bf8bf47783032ba0a264a11fcaf8d1f8688a9096c83a898a6d710c0b1e860b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

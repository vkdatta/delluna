export const name="lucid_2-list-x";
export const id="dl_c91b381fb6f54f278e90";
export const url=new URL("../icons/lucid_2-list-x.svg?v=8e66e23795fd711949df660a652fa3d85ef1936a39f0ae605b1f654fb4bf01a4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

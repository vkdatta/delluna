export const name="odt";
export const id="dl_1afe18a3f6af5ab3ffdb";
export const url=new URL("../icons/odt.svg?v=ad09d75bc29446a0f839af6cb9ff07bdd626bc21c0a0ab2262cb06f250f3d38c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

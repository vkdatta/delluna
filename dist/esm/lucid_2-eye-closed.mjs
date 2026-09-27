export const name="lucid_2-eye-closed";
export const id="dl_0d7fd46ed8344c0a87cd";
export const url=new URL("../icons/lucid_2-eye-closed.svg?v=a7878c7317279c8d86432a6c17f6a63134e985baca159641ac2ad28e6b7696aa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

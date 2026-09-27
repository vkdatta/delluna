export const name="contact_page-fill";
export const id="dl_c651d2bfad22a3be73d9";
export const url=new URL("../icons/contact_page-fill.svg?v=20e80866e231c04b8896edcda2ec0a884dda773abfca44be42c26be5215134a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

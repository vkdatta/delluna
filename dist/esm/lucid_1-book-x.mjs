export const name="lucid_1-book-x";
export const id="dl_b613d65e42f34e0294e0";
export const url=new URL("../icons/lucid_1-book-x.svg?v=aec4cc49b862ba92d4fa2fa724156a10592b3aea60a5c3e2562ff0f723ce9e36",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

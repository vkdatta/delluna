export const name="lucid_3-notepad-text";
export const id="dl_a2ce6e3c73434725a77f";
export const url=new URL("../icons/lucid_3-notepad-text.svg?v=fafc6f949b19820f0ad7fdaa0e68bef6294294a5ffcd9ccfda3efa5cda89b750",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

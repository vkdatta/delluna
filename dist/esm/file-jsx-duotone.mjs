export const name="file-jsx-duotone";
export const id="dl_d47d75e32b244ea99bb4";
export const url=new URL("../icons/file-jsx-duotone.svg?v=6b1bdf3564ea30eaa0fac6f072ceed32c8c6e3a4161b44f1ba852ead6a406c34",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

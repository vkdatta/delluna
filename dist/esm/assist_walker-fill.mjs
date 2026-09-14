export const name="assist_walker-fill";
export const id="dl_4bdb6423a18d4a2da52b";
export const url=new URL("../icons/A/assist_walker-fill.svg?v=6ef157cf4a4e5cef870213cb8f42f994ea91a5f8874f5f7f5968e3e952dfb3f9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

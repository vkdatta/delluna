export const name="microsoft-word-logo";
export const id="dl_9e3bb725418b4ca9849c";
export const url=new URL("../icons/microsoft-word-logo.svg?v=b409df97e566de61e6fbf86789c3f505e5aa8254a8ce10fcc4aff2cc813239a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

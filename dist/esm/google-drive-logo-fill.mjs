export const name="google-drive-logo-fill";
export const id="dl_0a2675be9b544adda7f0";
export const url=new URL("../icons/google-drive-logo-fill.svg?v=8b6733b1aaf27d4fb22824f369c3198f9443c532dcf4eaa9423d676b6834d978",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

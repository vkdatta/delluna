export const name="copy-fill";
export const id="dl_f169698966cd433c88d0";
export const url=new URL("../icons/copy-fill.svg?v=d8f583605f5b57e35c6e3da4dce20a43a663f8e1658434fd50ae93e6f3d49f67",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="shield-warning";
export const id="dl_9bf0d98e758ff69ae66a";
export const url=new URL("../icons/shield-warning.svg?v=9335ffed63c9e1f3c290dd50cfa9ae65745832bc9d553b89de51a82dff6145c8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

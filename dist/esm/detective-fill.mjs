export const name="detective-fill";
export const id="dl_d8de674b6c9d47a2af8f";
export const url=new URL("../icons/detective-fill.svg?v=13a73d267c14b02ac95ce7f66eb3ba756a18c572f4ec67496f77753848351ca5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

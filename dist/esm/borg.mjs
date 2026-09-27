export const name="borg";
export const id="dl_ac602d52401c49ecf8f0";
export const url=new URL("../icons/borg.svg?v=e3de805a225cabe2e14d716d4ba1dd2e57e6563f33c395b09c6d4e5f593666e7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

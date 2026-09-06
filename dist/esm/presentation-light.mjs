export const name="presentation-light";
export const id="dl_175552113af34bcf8339";
export const url=new URL("../icons/presentation-light.svg?v=609f88bde062e3af7c93b1fdfa5a725bfabece94c6c773c4d2c73ec408f7ffe7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

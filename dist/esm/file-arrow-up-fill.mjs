export const name="file-arrow-up-fill";
export const id="dl_da69717040b046199843";
export const url=new URL("../icons/file-arrow-up-fill.svg?v=1c022b8f41c2a78d25b211fe05171ad3b747f97390ca1e582533ca50fb25fac1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

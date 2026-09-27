export const name="file-zip-light";
export const id="dl_ef9466bb28c2400b8294";
export const url=new URL("../icons/file-zip-light.svg?v=9520482cae7d4d560ef27e05f19365734961e0384fa6dc30f4604cbbd59b3859",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

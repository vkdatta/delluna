export const name="auto_delete";
export const id="dl_391f8f546e10423bbb95";
export const url=new URL("../icons/A/auto_delete.svg?v=17672d184bba1e959288934d2b460445907c718a78b26b8f3a11efbbbf4b2874",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

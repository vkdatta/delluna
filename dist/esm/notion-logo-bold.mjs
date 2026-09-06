export const name="notion-logo-bold";
export const id="dl_ef7d911f419f4e8fbc05";
export const url=new URL("../icons/notion-logo-bold.svg?v=aa6567c4b99058284025f6a5bb81cc6496a5b97edda43c20f53bbf24565aa73d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

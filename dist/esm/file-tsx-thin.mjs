export const name="file-tsx-thin";
export const id="dl_512b9f68372f416fb827";
export const url=new URL("../icons/file-tsx-thin.svg?v=75eee7ad39e69a75e40db39f5a68626f14386ffbce7c5d8d27f8cefa601f9879",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

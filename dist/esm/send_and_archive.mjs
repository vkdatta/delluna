export const name="send_and_archive";
export const id="dl_af8d6d75cc3bea553856";
export const url=new URL("../icons/send_and_archive.svg?v=4a12c29064f01d1cb6ae0a69225c8d8b44ae94a1c00cb5c57f77450f60a09a6d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

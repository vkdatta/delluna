export const name="lucid_2-hard-drive-download";
export const id="dl_5b5806b08c2847968642";
export const url=new URL("../icons/lucid_2-hard-drive-download.svg?v=61cafe41db3eee93bf8a05928a1185ced07e47d2f4b6a07420431c91e5c0bf7c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

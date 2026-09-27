export const name="lucid_2-copyright";
export const id="dl_dd88cd79431f4bafad68";
export const url=new URL("../icons/lucid_2-copyright.svg?v=b7df2bea8087cf15ce36ecd1e3af8601e5a82cc06a556feb40d8dfc0ef85c8fc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

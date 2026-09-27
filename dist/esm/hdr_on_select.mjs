export const name="hdr_on_select";
export const id="dl_76c71a4be137d4d5a13e";
export const url=new URL("../icons/hdr_on_select.svg?v=e597512849b4312df6baafe0dddcbbb204bef352da4daf72a496085e696a0844",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

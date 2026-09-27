export const name="format_align_justify";
export const id="dl_4f74103feaae17b4a2e5";
export const url=new URL("../icons/format_align_justify.svg?v=be734eaabf738ce414fa166b8ac28601988bea5f377ba58be669554d0966b2e7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

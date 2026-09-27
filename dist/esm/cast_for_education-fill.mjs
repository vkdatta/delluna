export const name="cast_for_education-fill";
export const id="dl_98c731292906ef6e3310";
export const url=new URL("../icons/cast_for_education-fill.svg?v=8e8a446a4a98896c900398a5ba727c26da6d8d0c00c816a1a4c255699831d153",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

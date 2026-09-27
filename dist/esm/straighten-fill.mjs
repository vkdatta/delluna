export const name="straighten-fill";
export const id="dl_15970d1aeb9fdd16a7ff";
export const url=new URL("../icons/straighten-fill.svg?v=8836e97b70dd04733b50ff2e44775ee612062b90a58c413abb50c7b5b823b403",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

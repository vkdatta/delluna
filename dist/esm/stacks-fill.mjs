export const name="stacks-fill";
export const id="dl_59749746ce9d0f231571";
export const url=new URL("../icons/stacks-fill.svg?v=5f6562be94c86951df15f9ab2fad2d5dfe51bbd267fb18c423383dd6257c3c7d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

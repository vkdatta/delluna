export const name="lucid_3-salad";
export const id="dl_53eeb309ba414c199892";
export const url=new URL("../icons/lucid_3-salad.svg?v=9c2a54565f86c096bae93911de4f5e4a19ab0f28f77e58431fb5be4186753bc0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

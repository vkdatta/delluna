export const name="rice_bowl";
export const id="dl_684d56e17c5a4a8b0fdd";
export const url=new URL("../icons/rice_bowl.svg?v=50eaafb71bb52cada481bf70055b3cfba7c351591fee873fde868f8528df9ab1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="filter_alt";
export const id="dl_603b208687e8c9bda530";
export const url=new URL("../icons/filter_alt.svg?v=50879d74fea692effaac7cbad9f5732991ae33bf51d82b747f783fab92400838",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="filter_alt";
export const id="dl_257a73792563484b9cad";
export const url=new URL("../icons/F/filter_alt.svg?v=50879d74fea692effaac7cbad9f5732991ae33bf51d82b747f783fab92400838",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

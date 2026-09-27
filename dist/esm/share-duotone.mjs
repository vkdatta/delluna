export const name="share-duotone";
export const id="dl_8ba21e8c193789a434ed";
export const url=new URL("../icons/share-duotone.svg?v=4b7b711053cf4aacf8b08f78f72e197a84d56c9ceaf5b2f081f2ecab35eb2422",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

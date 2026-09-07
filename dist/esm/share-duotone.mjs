export const name="share-duotone";
export const id="dl_13c37f1d6c3f4c71846c";
export const url=new URL("../icons/S/share-duotone.svg?v=4b7b711053cf4aacf8b08f78f72e197a84d56c9ceaf5b2f081f2ecab35eb2422",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

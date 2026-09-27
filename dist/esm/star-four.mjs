export const name="star-four";
export const id="dl_49993259018b87109895";
export const url=new URL("../icons/star-four.svg?v=2c050bced9c18cb27f52fafe9dce2b72ab69b64c17b283dd10654e8f670d95d6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="lucid_3-receipt-indian-rupee";
export const id="dl_d6803d5dc8cb48ab8a88";
export const url=new URL("../icons/lucid_3-receipt-indian-rupee.svg?v=45395f748d9be5ffe36574fdde2344ba02dedd225b8fc09b12118f8f9c27cb57",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

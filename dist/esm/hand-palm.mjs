export const name="hand-palm";
export const id="dl_35ce130893964e84b5ab";
export const url=new URL("../icons/hand-palm.svg?v=a5a91e54f1451355ceb0265995e8b51ea97b8c79c4d1caeb798ff92b8a4dd85a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="golf-thin";
export const id="dl_3527ae0df24947d98f36";
export const url=new URL("../icons/golf-thin.svg?v=dd9877a970cc9e8c91115e2d9552e156e8f3945c442a9d45e0eaac4d19b92d8f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

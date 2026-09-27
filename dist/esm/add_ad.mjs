export const name="add_ad";
export const id="dl_b69244458f21458ae70b";
export const url=new URL("../icons/add_ad.svg?v=fb13a8d903f5b0661bd0fc61cf44628d5fea2a4d8196300aea0cdebb6f984d05",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

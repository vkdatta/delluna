export const name="arrow_back_ios_new-fill";
export const id="dl_539b1168d872d57abcde";
export const url=new URL("../icons/arrow_back_ios_new-fill.svg?v=bc151efb6eaec1f5e52a7e24ca4ddf302325211dd7b2bf3cdf1a0ea5bc87d668",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

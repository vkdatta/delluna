export const name="instagram-logo-bold";
export const id="dl_5228bb126b7a4d3eba33";
export const url=new URL("../icons/instagram-logo-bold.svg?v=d6f52db40ee427e679b87d2f0d0a032589d069ba649ff6d061daf108e83cd286",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

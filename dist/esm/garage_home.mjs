export const name="garage_home";
export const id="dl_096c6225d6db559a74cc";
export const url=new URL("../icons/garage_home.svg?v=9b5216b9f1797b6d224de0acf61669b2761319e55aea37483a2e78f8dec906a9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

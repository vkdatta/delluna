export const name="lucid_1-ad";
export const id="dl_5e99f4d039b64157825c";
export const url=new URL("../icons/lucid_1-ad.svg?v=f3f2bd9db020420cf19765ed5fe7525a8c15bc37d04b9d60cacdf0a392365f9f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

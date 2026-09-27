export const name="first-aid-bold";
export const id="dl_805ebc239a0642e1845e";
export const url=new URL("../icons/first-aid-bold.svg?v=871ad136220d20507e16fd8a30d541b04c5d5630dce6a304db0218eff736a01f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

export const name="fediverse-logo-thin";
export const id="dl_0fe4e60caddb4ec2b1fd";
export const url=new URL("../icons/fediverse-logo-thin.svg?v=dbfa3d797d0bac34495f68b9f9d4e56cb95a1e8c91b573d5616c82eeb35f3806",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

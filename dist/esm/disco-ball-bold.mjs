export const name="disco-ball-bold";
export const id="dl_73ebee3eb0784380b6d8";
export const url=new URL("../icons/disco-ball-bold.svg?v=1ca2a92481b422b203461697e76d5f199a83e810dff0f80bbcbc6a78767a9602",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

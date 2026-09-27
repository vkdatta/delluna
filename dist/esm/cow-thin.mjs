export const name="cow-thin";
export const id="dl_c047f08df9ef43a2b003";
export const url=new URL("../icons/cow-thin.svg?v=ee9086dfc1d55040e2a52e5a7cb1a2182373185939b945c3827946a96f2e83cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

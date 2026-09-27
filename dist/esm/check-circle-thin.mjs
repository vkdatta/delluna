export const name="check-circle-thin";
export const id="dl_9f397684c7f34ae6b59b";
export const url=new URL("../icons/check-circle-thin.svg?v=5c0f2fbbea30164ba35ae59c9989988768b5c0c7b1a751e6e7b77a569d1070b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

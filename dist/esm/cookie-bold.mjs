export const name="cookie-bold";
export const id="dl_1c6dd0f02ec240bd9664";
export const url=new URL("../icons/cookie-bold.svg?v=5260414f55dc85ae4648727d1c21370f86026e1d6f2ea31ce3ccc51efe6180ee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;

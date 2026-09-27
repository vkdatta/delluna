export const name="trolley-bold";
export const id="dl_1154453f2a4d30ad68f0";
export const url=new URL("../icons/trolley-bold.svg?v=7d1b619ea1c0e7d8cfdd87f29c5f96f38ea972814a4ac4c443a92b068ba3a66a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
